//CRE8.AUTH
//TODO: LOCAL SESSION
//LOCAL VS NON LOCAL AUTH AND IDENTITY
//AUTH / SESSION APP
module.exports = {
    logout: async function (input, output) {
        var userModel = await User.update({id: input.user.id}, {loggedIn: false});
        input.logout();
        output.redirect('/');
    },
    provider: function (input, output) {passportApp.endpoint(input, output);},
    callback: function (input, output) {
        passportApp.callback(input, output, function (err, user) {
            if(user){if (user._id){user.id = user._id;}}
            input.login(user, async function (err) {
                if (err) {output.redirect('/login');}
                else {
                    //ON AUTH / LOGIN
                    user.loggedIn = true;
                    input.session.User = user;

                    var userModel = await User.update({id: user.id}, {loggedIn: true});
                    User.publish([userModel[0].id], {verb: 'updated', data: userModel[0]});

                    //if user is mining
                    //Peer.find({});

                    //FIND ALL ASSOCIATIONS FOR USER
                    //Association.find({});

                    //POST SESSION IN VIEW
                    //DECENTRALIZE SESSION MANAGEMENT...
                    //BASED ON APPS.. POPULATE USER INFORMATION
                    //SOLVES THE PROBLEM OF JUST .id RENDER

                    //TODO:APP INPUT --> ON LOGIN

                    //TODO: REPACKAGE FITBIT --> CORE LOGIN PROTOCOL.. && INTERVAL START
                    //'LOGOUT AUTO AFTER X ACTIVITY.. '--> LAST ACTIVITY FLAG FOR USER CARD.. SMART COLOR FADE VS BINARY LOGGED IN :) 

                    //TODO: factor soon
                    //TODO: IMPORT OAUTH2 IN APP
                    //TODO: REFoutput. TOKENS 

                    //TODO: INIT APPS....
                    //var provider = 'fitbit';
                    //var options = {scope:['activity','heartrate','location','profile', 'sleep']};
                    //HMM -- BAD
                    //passportApp.authenticate(provider, options)(input, output, input.next).then(function(){
                        //fitbitApp.getData(user);
                        //master interval 
                        //setInterval(fitbitApp.getData.bind(null, user), 8640000);
                    //});
                    console.log('currently logged in user is: ' + input.user.username);
                    //ALLOW FOR UNTYPED? --> MAKE APPS --> SESSION APP 
                    //eventApp.create(session);
                    output.json(user);
                }
            });
        });
    }  
};