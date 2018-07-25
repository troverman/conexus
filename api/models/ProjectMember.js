/**
* ProjectMember.js
*/

module.exports = {

	attributes: {
        user: {
            model: 'user',
        },
        project: {
            model: 'project',
        }
    },

    beforeCreate: function(model, next) {
        ProjectMember.find({user:model.user, project:model.project}).then(function(projectMemberModel){
            if (projectMemberModel.length == 0){next()}
        });
    },

    afterCreate: function (project, next) {
        // set message.user = to appropriate user model
        User.getOne(project.user)
        .spread(function(user) {
            project.user = user;
            next(null, project);
        });
    },
    
};

