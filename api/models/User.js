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
        loggedIn: {
            type: 'boolean',
            defaultsTo: false
        },
        messages: {
            collection: 'message',
            via: 'user'
        },
        passports : { collection: 'Passport', via: 'user' },
        totalWork: {
            type: 'string',
            defaultsTo: 0
        },
        username: {
            type: 'string',
            required: true,
            unique: true
        },
    },

    afterCreate: function(model,next){

        //var coverUrlArray = ['images/congress.jpg', 'images/congress1.jpg', 'images/crowd.jpg', 'images/capitol.jpg', 'images/capitol1.jpg', 'images/bokeh.jpg', 'images/metro.jpg', 'images/natural.jpg' ,'images/nature.jpg'];
        //var randInt = Math.floor(Math.random() * (coverUrlArray.length + 1));
        //model.coverUrl = coverUrlArray[randInt];

        var colorArray = ['2ab996', '24242e', 'ff6a6a', 'ddbea8'];
        var colorInt = Math.floor(Math.random() * (colorArray.length + 1));
        var avatarUrl = 'https://ui-avatars.com/api/?size=256&name='+model.username+'&color=fff&background='+colorArray[colorInt];
        model.avatarUrl = avatarUrl;

        User.update({id: model.id}, model)
        .then(function(model){
            //emailService.sendTemplate('welcome', model.email, 'Welcome To Voetr!', {username: model.username});
            return next(null, model);
        });
            
    },

    getAll: function() {
        return User.find()
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return User.findOne(id)
        .populate('passports')
        .then(function (model) {
            return [model];
        });
    }
};