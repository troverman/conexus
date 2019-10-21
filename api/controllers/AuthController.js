//CRE8.AUTH
//TODO: LOCAL SESSION
//LOCAL VS NON LOCAL AUTH AND IDENTITY

module.exports = {

    logout: function (req, res) {
        req.user.loggedIn = false;
        User.update({id: req.user.id}, {loggedIn: false}).then(function(userModel) {
            User.publish([userModel[0].id], {verb: 'create', data: userModel[0].id});
        });
        console.log(req.user.username + ': logged out');
        req.logout();
        res.redirect('/');
    },

    provider: function (req, res) {passport.endpoint(req, res);},

    callback: function (req, res) {
        passport.callback(req, res, function (err, user) {
            if(user){if (user._id){user.id = user._id;}}
            req.login(user, function (err) {
                if (err) {res.redirect('/login');}
                else {

                    //ON AUTH / LOGIN
                    user.loggedIn = true;
                    req.session.User = user;

                    User.update({id: user.id}, {loggedIn: true}).then(function(userModel) {
                        User.publish([userModel[0].id], {verb: 'updated', data: userModel[0]});
                    });

                    //if user is mining
                    Peer.find({}).then(function(){});

                    //FIND ALL ASSOCIATIONS FOR USER
                    Association.find({}).then(function(){});

                    //POST SESSION IN VIEW
                    //DECENTRALIZE SESSION MANAGEMENT...
                    //BASED ON APPS.. POPULATE USER INFORMATION
                    //SOLVES THE PROBLEM OF JUST .id RENDER

                    //TODO:APP INPUT --> ON LOGIN

                    //TODO: REPACKAGE FITBIT --> CORE LOGIN PROTOCOL.. && INTERVAL START
                    //'LOGOUT AUTO AFTER X ACTIVITY.. '--> LAST ACTIVITY FLAG FOR USER CARD.. SMART COLOR FADE VS BINARY LOGGED IN :) 
                    fitbitApp.getData(user);

                    console.log('currently logged in user is: ' + req.user.username);
                    res.json(user);

                    //if (register){res.json(user)}
                    //else{res.redirect('/'));

                }
            });
        });
    }
};