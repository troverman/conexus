/**
* Project.js
*/
module.exports = {
	attributes: {
        title: {
            type: 'string',
        },
        memberCount: {
            type: 'integer',
            defaultsTo: 0
        },
        taskCount: {
            type: 'integer',
            defaultsTo: 0
        },
        liveCount: {
            type: 'integer',
            defaultsTo: 0
        },
        //{address:'',lat:'',lng:''}
        location: {
            type: 'json',
        },
        avatarUrl: {
            type: 'string',
            defaultsTo: '/images/loading.gif'
        },
        urlTitle: {
            type: 'string',
        },
        parent: {
            type: 'string'
        },
        user: {
            model: 'user'
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
