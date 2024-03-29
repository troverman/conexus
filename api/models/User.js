const request = require('request');

//CRE8.USER
//TODO: TO MEMBER
module.exports = {
    attributes: {
        model: {type: 'string', defaultsTo: 'MEMBER'},

        avatarUrl: {type: 'string', defaultsTo: 'images/avatar.png'},
        coverUrl: {type: 'string'},
        username: {type: 'string', required: true, unique: true},

        //IDENTITY AND PASSPORTS..
        email: {type: 'string', required: true, unique: true},
        phoneNumber: {type: 'string', allowNull: true},

        //INFORMATION
        info: {type: 'json'},
        information: {type: 'json'},
        firstName: {type: 'string', allowNull: true},
        lastName: {type: 'string', allowNull: true},
        dateOfBirth: {type: 'string', allowNull: true},
        address: {type: 'string', allowNull: true},

        //STATUS.. APP
        loggedIn: {type: 'boolean', defaultsTo: false},
        isWorking: {type: 'boolean', defaultsTo: false},
        isLive: {type: 'boolean', defaultsTo: false},

        //DATA
        //COUNTS.. APP
        followingCount: {type: 'number',defaultsTo: 0},
        followerCount: {type: 'number',defaultsTo: 0},
        notificationCount: {type: 'number',defaultsTo: 0},
        projectCount: {type: 'number',defaultsTo: 0},
        totalWork: {type: 'number',defaultsTo: 0},

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
        var colorArray = ['2ab996', '24242e', 'ff6a6a', 'ddbea8'];
        var colorInt = Math.floor(Math.random() * (colorArray.length + 1));
        var avatarUrl = 'https://ui-avatars.com/api/?size=256&name='+model.username+'&color=fff&background='+colorArray[colorInt];
        model.avatarUrl = avatarUrl;
        var url = "https://api.unsplash.com/photos/random?page=1&client_id=b996e9314d68deae5fe37098f096cd6b3b035f5c63989805aa23d4bd8c7358a2&secret=2ddbfdd90eaf2bcfc6f3cec5ec58c677b35cb470dc63d39e0e0372755b59c434%27";
        request(url, async function (error, response, body) {
            var body = JSON.parse(body);
            if (body.urls){model.coverUrl = body.urls.small;}
            //TODO           
            model.apps = {cre8:{recordAttention:true,tutorial:true}};
            var model = await User.update({id: model.id}, model);
            //TODO:
            //emailService.sendTemplate('welcome', model.email, 'Welcome To CREATE!', {username: model.username});
            return next(null, model);
        });   
    }
};