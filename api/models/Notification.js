//CRE8.NOTIFICATION
module.exports = {
	attributes: {
		
		//DEPRECIATE
        model: {type: 'string', defaultsTo: 'NOTIFICATION'},
        
        user: {model: 'user'},
        type: {type: 'string'},
        content: {type: 'string'},
        priority: { type: 'string'},
        isRead: { type: 'boolean', defaultsTo: false},
    },
};

