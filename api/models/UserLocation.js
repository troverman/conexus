module.exports = {
    attributes: {
        title: {
            type: 'string',
            required: true
        },
        project: {
            model: 'project',
            required: true
        },
        user: {
            model: 'user',
            required: true
        }
    },

    afterCreate: function (message, next) {
        // set message.user = to appropriate user model
        User.getOne(message.user)
        .spread(function(user) {
            message.user = user;
            next(null, message);
        });
    },

    getByProject: function(project) {
        return Message.find()
        .where({project: project})
        .sort({createdAt: 'desc'})
        .populate('user')
        .populate('project')
        .then(function (models) {
            return [models];
        });
    },

    getByUser: function(user) {
        return Message.find()
        .where({user: user})
        .sort({createdAt: 'desc'})
        .populate('user')
        .populate('project')
        .then(function (models) {
            return [models];
        });
    },

    getAll: function() {
        return Message.find()
        .sort({createdAt: 'desc'})
        .populate('user')
        .populate('project')
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Message.findOne(id)
        .populate('user')
        .populate('project')
        .then(function (model) {
            // you have the option to do something with the model here if needed, before returning it to the controller
            return [model];
        });
    }
};
