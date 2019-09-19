//CRE8.PROJECT
module.exports = {
	attributes: {

        title: {type: 'string'},
        description: {type: 'string'},
        avatarUrl: {type: 'string', defaultsTo: '/images/loading.gif'},
        urlTitle: {type: 'string'},
        context: {type: 'string'},
        location: {type: 'json'},

        associatedModels: {type: 'json'},

        user: {model: 'user'},
        creator: {type: 'string'},

        info: {type: 'json'},
        information: {type: 'json'},

        data: {type: 'json'},
        dataHash: {type: 'string'},
       
        //COUNTS
        //TODO: APPS - DATA ?? REACTIONS.. ..association mapping?
        //associations:content:1
        contentCount: {type: 'integer',defaultsTo: 0},
        itemCount: {type: 'integer',defaultsTo: 0},
        memberCount: {type: 'integer',defaultsTo: 0},
        taskCount: {type: 'integer',defaultsTo: 0},
        timeCount: {type: 'integer',defaultsTo: 0},
        liveCount: {type: 'integer',defaultsTo: 0},
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
