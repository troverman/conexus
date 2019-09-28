//CRE8.TASK
module.exports = {
    attributes: {
        title: {type: 'string'},
        content: {type: 'string', allowNull: true},
        associatedModels: {type: 'json'},
        context: {type: 'string'},
        location: {type: 'json'},
        user: {model: 'user'},
        creator: {type: 'string'},
        //COUNT.. DATA.. CONNECTED APPS..
        information: {type: 'json'},
        //WHOS VIEWING.. ETC
        //status: {type: 'string', defaultsTo: 'Pending'},
        data: {type: 'json'},
    },
};

