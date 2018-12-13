/**
* Project.js
*/
module.exports = {
	attributes: {


        //BASIC
        title: {type: 'string'},
        description: {type: 'string'},
        avatarUrl: {type: 'string', defaultsTo: '/images/loading.gif'},

        //TODO: DEPRECIATE?
        urlTitle: {type: 'string'},

        //INFO
        tags: {type: 'string'},
        location: {type: 'json'},

        //TODO: RELATIONSHIPS | ASSOCIATIONS
        relationships: {type: 'json'},
        associatedModels: {type: 'string'},
        parent: {type: 'string'},

        //ASSOCIATIONS
        associations: {type: 'json'},

        //TODO: SETTTINGS
        //TODO: ASSOCAITED STRING MANIFOLD

        //TODO: CREATOR 
        //TODO: MORE
        user: {model: 'user'},

        //TODO: INFO
        //COUNTS
        memberCount: {
            type: 'integer',
            defaultsTo: 0
        },
        taskCount: {
            type: 'integer',
            defaultsTo: 0
        },
        timeCount: {
            type: 'integer',
            defaultsTo: 0
        },
        liveCount: {
            type: 'integer',
            defaultsTo: 0
        },


    },
    afterCreate: function (model, next) {
        var colorArray = ['2ab996', '24242e', 'ff6a6a', 'ddbea8'];
        var colorInt = Math.floor(Math.random() * (colorArray.length));
        var avatarUrl = 'https://ui-avatars.com/api/?size=256&name='+model.title+'&color=fff&background='+colorArray[colorInt];
        model.avatarUrl = avatarUrl;
        Project.update({id: model.id}, model)
        .then(function(model){
            return next(null, model);
        });
    },
};
