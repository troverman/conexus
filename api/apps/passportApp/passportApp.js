//CRE8.PASSPORTAPP
//TODO: EVERYTHING

const path = require('path');
const url = require('url');

const passport = require('passport');
//authenticate 
//..

passport.protocols = require('./passportApps');

//REQUIRE AS APPMANAGER
//REQUIRE ALLOWS SELF

passport.connect = function (req, query, profile, next) {

    console.log('CONNECT', query, profile);

    var user = {}, provider;
    query.provider = req.param('provider');
    provider = profile.provider || query.provider;

    if (!provider){return next(new Error('No authentication provider was identified.'));}

    if (profile.hasOwnProperty('emails')) {user.email = profile.emails[0].value;}
    if (profile.hasOwnProperty('username')) {user.username = profile.username;}
    if (!user.email) {user.email = user.username+'@conex.us'}

    if (!user.username && !user.email) {return next(new Error('Neither a username nor email was available'));}

    Passport.findOne({provider: provider, identifier: query.identifier.toString()}, function (err, passport) {
        if (err) {return next(err);}
        if (!req.user) {
            if (!passport) {
                User.create(user, function (err, user) {
                    if (err) {
                        if (err.code === 'E_VALIDATION') {
                            if (err.invalidAttributes.email) {req.flash('error', 'Error.Passport.Email.Exists');}
                            else {req.flash('error', 'Error.Passport.User.Exists');}
                        }
                        return next(err);
                    }
                    query.user = user.id;
                    Passport.create(query, function (err, passport) {
                        if (err) {return next(err);}
                        next(err, user);
                    });
                });
            }
            else {
                if (query.hasOwnProperty('tokens') && query.tokens !== passport.tokens) {passport.tokens = query.tokens;}
                Passport.update({id:passport.id}, {tokens:passport.tokens}).then(function(passportModel){
                    User.findOne(passport.user.id, next);
                });
            }
        } 
        else {
            if (!passport) {
                query.user = req.user.id;
                Passport.create(query, function (err, passport) {
                    if (err) {return next(err);}
                    next(err, req.user);
                });
            }
            else {
                if (query.hasOwnProperty('tokens') && query.tokens !== passport.tokens) {passport.tokens = query.tokens;}
                Passport.update({id:passport.id}, {tokens:passport.tokens}).then(function(passportModel){
                    User.findOne(passport.user.id, next);
                });
            }
        }
    });
};

passport.endpoint = function (req, res) {
    var strategies = sails.config.passport
    var provider   = req.param('provider')
    var options    = {};
    if (!strategies.hasOwnProperty(provider)) {return res.redirect('/login');}
    if (strategies[provider].hasOwnProperty('scope')) {options.scope = strategies[provider].scope;}
    //console.log(provider, options);
    this.authenticate(provider, options)(req, res, req.next);
};

//TODO: LOOK AT 'THIS' :)
passport.callback = function (req, res, next) {
    var provider = req.param('provider', 'local')
    var action   = req.param('action');
    if (provider === 'local' && action !== undefined) {
        if (action === 'register' && !req.user) {this.protocols.local.register(req, res, next);}
        else if (action === 'connect' && req.user) {this.protocols.local.connect(req, res, next);}
        else if (action === 'disconnect' && req.user) {this.protocols.local.disconnect(req, res, next);}
        else {next(new Error('Invalid action'));}
    } 
    else {
        if (action === 'disconnect' && req.user) {this.disconnect(req, res, next) ;} 
        else {this.authenticate(provider, next)(req, res, req.next);}
    }
};

passport.loadStrategies = function () {
    var self       = this
    var strategies = sails.config.passport;

    Object.keys(strategies).forEach(function (key) {
        var options = { passReqToCallback: true }, Strategy;

        if (key === 'local') {
            _.extend(options, { usernameField: 'identifier' });
            _.extend(options, strategies[key].options || {});
            if (strategies.local) {
                Strategy = strategies[key].strategy;
                self.use(new Strategy(options, self.protocols.local.login));
            }
        } 
        else {
            var protocol = strategies[key].protocol
            var callback = strategies[key].callback;
            if (!callback) {callback = 'auth/' + key + '/callback';}
            Strategy = strategies[key].strategy;
            var baseUrl = 'https://www.cre8.xyz'; //sails.getBaseurl();

            switch (protocol) {
                case 'oauth':
                case 'oauth2':
                    options.callbackURL = url.resolve(baseUrl, callback);
                    break;
                case 'openid':
                    options.returnURL = url.resolve(baseUrl, callback);
                    options.realm     = baseUrl;
                    options.profile   = true;
                    break;
            }
            _.extend(options, strategies[key].options);
            self.use(new Strategy(options, self.protocols[protocol]));
        }
    });
};

passport.disconnect = function (req, res, next) {
    var user = req.user;
    var provider = req.param('provider');
    Passport.findOne({provider: provider, user: user.id}, function (err, passport) {
        if (err) {return next(err);}
        Passport.destroy(passport.id, function (error) {
            if (err) {return next(err);}
            next(null, user);
        });
    });
};

passport.serializeUser(function (user, next) {next(null, user.id);});
passport.deserializeUser(function (id, next) {User.findOne(id, next);});

module.exports = passport;
