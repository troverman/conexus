var request = require('request');

module.exports = {
    attributes: {
        avatarUrl: {
            type: 'string',
            defaultsTo: 'images/avatar.png'
        },
        coverUrl: {
            type: 'string',
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },

        firstName: {
            type: 'string',
        },
        lastName: {
            type: 'string',
        },
        dateOfBirth: {
            type: 'string',
        },
        address: {
            type: 'string',
        },

        loggedIn: {
            type: 'boolean',
            defaultsTo: false
        },
        isWorking: {
            type: 'boolean',
            defaultsTo: false
        },
        isLive: {
            type: 'boolean',
            defaultsTo: false
        },

        followingCount: {
            type: 'integer',
            defaultsTo: 0
        },
        followerCount: {
            type: 'integer',
            defaultsTo: 0
        },
        projectCount: {
            type: 'integer',
            defaultsTo: 0
        },

        passports : { collection: 'Passport', via: 'user' },
        totalWork: {
            type: 'integer',
            defaultsTo: 0
        },

        //MAPPINGS
        reputation: {
            type: 'json',
        },
        balance: {
            type: 'json',
        },

        //location time mapping??
        //give dimensional tokens 
        //mappingOfTimeStampString -> LatLng
        //Location Token Manifold minting logic
        //Location+lat+lng+datetime
        //give +1 latLng Token per create 
        locationTime: {
            type: 'json',
        },

        username: {
            type: 'string',
            required: true,
            unique: true
        },
    },

    afterCreate: function(model, next){

        //var coverUrlArray = ['images/congress.jpg', 'images/congress1.jpg', 'images/crowd.jpg', 'images/capitol.jpg', 'images/capitol1.jpg', 'images/bokeh.jpg', 'images/metro.jpg', 'images/natural.jpg' ,'images/nature.jpg'];
        //var randInt = Math.floor(Math.random() * (coverUrlArray.length + 1));
        //model.coverUrl = coverUrlArray[randInt];

        var colorArray = ['2ab996', '24242e', 'ff6a6a', 'ddbea8'];
        var colorInt = Math.floor(Math.random() * (colorArray.length + 1));
        var avatarUrl = 'https://ui-avatars.com/api/?size=256&name='+model.username+'&color=fff&background='+colorArray[colorInt];
        model.avatarUrl = avatarUrl;

        var url = "https://api.unsplash.com/photos/random?page=1&client_id=b996e9314d68deae5fe37098f096cd6b3b035f5c63989805aa23d4bd8c7358a2&secret=2ddbfdd90eaf2bcfc6f3cec5ec58c677b35cb470dc63d39e0e0372755b59c434%27";
        request(url, function (error, response, body) {
            var body = JSON.parse(body);
            if (body.urls){model.coverUrl = body.urls.small;}
            User.update({id: model.id}, model)
            .then(function(model){
                //emailService.sendTemplate('welcome', model.email, 'Welcome To Voetr!', {username: model.username});
                return next(null, model);
            });
        });
        
    },
    
};