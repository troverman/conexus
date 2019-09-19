//CRE8.USER
//TODO: TO MEMBER
module.exports = {
    attributes: {

        avatarUrl: {type: 'string', defaultsTo: 'images/avatar.png'},
        coverUrl: {type: 'string'},
        username: {type: 'string', required: true, unique: true},

        //IDENTITY AND PASSPORTS..
        email: {type: 'email', required: true, unique: true},
        phoneNumber: {type: 'string'},

        //INFORMATION
        info: {type: 'json'},
        information: {type: 'json'},
        firstName: {type: 'string'},
        lastName: {type: 'string'},
        dateOfBirth: {type: 'string'},
        address: {type: 'string'},

        //STATUS.. APP
        loggedIn: {type: 'boolean', defaultsTo: false},
        isWorking: {type: 'boolean', defaultsTo: false},
        isLive: {type: 'boolean', defaultsTo: false},

        //DATA
        //COUNTS.. APP
        followingCount: {type: 'integer',defaultsTo: 0},
        followerCount: {type: 'integer',defaultsTo: 0},
        notificationCount: {type: 'integer',defaultsTo: 0},
        projectCount: {type: 'integer',defaultsTo: 0},
        totalWork: {type: 'integer',defaultsTo: 0},

        //MAPPINGS
        //..APP
        //reputation: {type: 'json'},
        balance: {type: 'json'},
        
        //mappingOfTimeStampString -> LatLng
        //Location Token Manifold minting logic
        //balance..
        //Location+lat+lng+datetime
        locationTime: {type: 'json'},
        
        //PASSPORT
        passports: { collection: 'Passport', via: 'user' },

        //DATA
        data: {type: 'json'},
        apps: {type: 'json'},

    },

    //TODO
    afterCreate: function(model, next){

        const request = require('request');

        var colorArray = ['2ab996', '24242e', 'ff6a6a', 'ddbea8'];
        var colorInt = Math.floor(Math.random() * (colorArray.length + 1));
        var avatarUrl = 'https://ui-avatars.com/api/?size=256&name='+model.username+'&color=fff&background='+colorArray[colorInt];
        model.avatarUrl = avatarUrl;

        var url = "https://api.unsplash.com/photos/random?page=1&client_id=b996e9314d68deae5fe37098f096cd6b3b035f5c63989805aa23d4bd8c7358a2&secret=2ddbfdd90eaf2bcfc6f3cec5ec58c677b35cb470dc63d39e0e0372755b59c434%27";
        request(url, function (error, response, body) {
            var body = JSON.parse(body);
            if (body.urls){model.coverUrl = body.urls.small;}
            //TODO           
            model.apps = {cre8:{recordAttention:true,tutorial:true}};
            User.update({id: model.id}, model)
            .then(function(model){
                //emailService.sendTemplate('welcome', model.email, 'Welcome To CREATE!', {username: model.username});
                return next(null, model);
            });
        });
        
    },
    
};