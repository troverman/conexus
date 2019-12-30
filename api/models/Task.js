//CRE8.TASK
module.exports = {
    attributes: {
        //DEPRECIATE
        model: {type: 'string', defaultsTo: 'TASK'},

        title: {type: 'string'},
        content: {type: 'string', allowNull: true},
        associatedModels: {type: 'json'},
        context: {type: 'string'},
        location: {type: 'json'},
        user: {model: 'user'},
        creator: {type: 'string'},

        //COUNT.. DATA.. CONNECTED APPS..
        information: {type: 'json'},
        data: {type: 'json'},
        
    },
};

