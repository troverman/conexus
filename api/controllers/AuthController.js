/**
 * Authentication Controller
 */
 
var AuthController = {

    logout: function (req, res) {
        //console.log(req.user);
        req.user.loggedIn = false;
        User.update({id: req.user.id}, {loggedIn: false}).then(function(userModel) {
            // Inform other sockets (e.g. connected sockets that are subscribed) that this user is now logged in
            User.publishUpdate(userModel[0].id, userModel[0]);
        });
        console.log(req.user.username + ': logged out');
        req.logout();
        res.redirect('/');
    },

    provider: function (req, res) {
        passport.endpoint(req, res);
    },

    callback: function (req, res) {
        console.log(req.body)
        passport.callback(req, res, function (err, user) {
            req.login(user, function (err) {
                if (err) {res.redirect('/login');}
                else {

                    user.loggedIn = true;
                    req.session.User = user;

                    User.update({id: user.id}, {loggedIn: true}).then(function(userModel) {

                        User.publishUpdate(userModel[0].id, userModel[0]);

                    });

                    //TODO:APP INPUT --> ON LOGIN
                    console.log(user, 'now get data..')

                    //TODO: REPACKAGE FITBIT --> CORE LOGIN PROTOCOL.. && INTERVAL START
                    //'LOGOUT AUTO AFTER X ACTIVITY.. '--> LAST ACTIVITY FLAG FOR USER CARD.. SMART COLOR FADE VS BINARY LOGGED IN :) 
                    //intervalService.getData(user);

                    console.log('currently logged in user is: ' + req.user.username);
                    res.json(user);


                    //if (register){res.json(user)}
                    //else{res.redirect('/'));


                }
            });
        });
    }

};

module.exports = AuthController;