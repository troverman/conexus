/**
* Entry.js
*/

module.exports = {

	attributes: {
        amount: {
            type: 'string',
            required: true
        },
        identifer: {
            type: 'string',
            required: true
        },
        type: {
            type: 'string',
        },
        project: {
            model: 'project'
        },
        task: {
            model: 'task'
        },
        user: {
            model: 'user'
        }
    },

    getAll: function() {
        return Finance.find()
        .sort({createdAt: 'desc'})
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Finance.findOne(id)
        .then(function (model) {
            return [model];
        });
    }

};

