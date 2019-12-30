//CRE8.PASSPORT.LOCAL

/**
 * Local Authentication Protocol
 *
 * The most widely used way for websites to authenticate users is via a username
 * and/or email as well as a password. This module provides functions both for
 * registering entirely new users, assigning passwords to already registered
 * users and validating login requesting.
 */
 
const bcrypt = require('bcryptjs');
const validator = require('validator');

/**
 * Register a new user
 *
 * This method creates a new user from a specified email, username and password
 * and assign the newly created user a local Passport.
 */
exports.register = function (req, res, next) {

    console.log('LOCAL REGISTER');

    var newMember = {
        email:req.param('email'),
        username:req.param('username'),
    };

    //HAK
    newMember.balance = {cre8:8, UNIVERSALTOKEN:1};

    if (!newMember.email) {return next(new Error('No email was entered.'));}
    if (!newMember.username) {return next(new Error('No username was entered.'));}
    if (!req.param('password')) {return next(new Error('No password was entered.'));}

    //_id???
    User.create(newMember).exec(function(err, user) {
        console.log(user);
        Passport.create({protocol : 'local', password : req.param('password'), user: user._id.toString()}).exec(function(err, passport) {
            if (err) {console.log('error', err); }
            else{next(null, user);}
        });
    });

};

/**
 * Assign local Passport to user
 *
 * This function can be used to assign a local Passport to a user who doens't
 * have one already. This would be the case if the user registered using a
 * third-party service and therefore never set a password.
  */
exports.connect = function (req, res, next) {
    var user = req.user
    var password = req.param('password');
    Passport.findOne({protocol : 'local', user: user.id}, function (err, passport) {
        if (err) {return next(err);}
        if (!passport) {
            Passport.create({protocol : 'local', password : password, user: user._id.toString()}, function (err, passport) {
                next(err, user);
            });
        }
        else {next(null, user);}
    });
};

/**
 * Validate a login request
 *
 * Looks up a user using the supplied identifier (email or username) and then
 * attempts to find a local Passport associated with the user. If a Passport is
 * found, its password is checked against the password supplied in the form.
 */
exports.login = function (req, identifier, password, next) {
    var isEmail = validator.isEmail(identifier)
    var query = {};
    if (isEmail) {query.email = identifier;}
    else {query.username = identifier;}
    User.findOne(query, function (err, user) {
        if (err) {return next(err);}
        if (!user) {
            if (isEmail) {console.log('error', 'Error.Passport.Email.NotFound');} 
            else {console.log('error', 'Error.Passport.Username.NotFound');}
            return next(null, false);
        }
        Passport.findOne({protocol : 'local', user: user.id}, function (err, passport) {
            if (passport) {
                bcrypt.compare(password, passport.password, function (err, res) {
                 if (err) {return next(err);}
                    if (!res) {return next(null, false);} 
                    else {return next(null, user);}
                });
            }
            else {return next(null, false);}
        });
    });
};