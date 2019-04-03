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

        //ASSOCIATIONS
        associatedModels: {type: 'json'},

        //CODIFY
        //[{type:'PROJECT', relationship:'parent', id:1}]
        //[{type:'PROJECT', relationship:'parent', id:2}]
        //[{type:'PROJECT', relationship:'child', id:3}]
        //[{type:'PROJECT', relationship:'child', id:4}]
        //[{type:'PROJECT', relationship:'sibling', id:4}]

        parent: {type: 'string'},

        //TODO: SETTTINGS
        //TODO: ASSOCAITED STRING MANIFOLD

        //TODO: CREATOR 
        //TODO: MORE
        user: {model: 'user'},

        //TODO: INFO
        //COUNTS
        info: {type: 'json'},
            contentCount: {
                type: 'integer',
                defaultsTo: 0
            },
            itemCount: {
                type: 'integer',
                defaultsTo: 0
            },
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
