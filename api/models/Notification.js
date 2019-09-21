//CRE8.NOTIFICATION
module.exports = {
	attributes: {
        user: {model: 'user'},
        type: {type: 'string'},
        content: {type: 'string'},
        priority: { type: 'string'},
        isRead: { type: 'boolean', defaultsTo: false},
    },
};

