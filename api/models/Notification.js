/**
* Notification.js
*/

module.exports = {
	attributes: {
        user: {model: 'user'},
        type: {type: 'string'},
        content: {type: 'string'},
        associations: {type: 'json'},
        priority: { type: 'string'},
        isRead: { type: 'boolean', defaultsTo: false},
    },
};

