//CRE8.PROJECTMEMBER
//DEPRECIATE
module.exports = {
	attributes: {
        project: {model: 'project'},
        user: {model: 'user'},
    },
    beforeCreate: function(model, next) {
        ProjectMember.find({user:model.user, project:model.project}).then(function(projectMemberModel){
            if (projectMemberModel.length == 0){next()}
        });
    },
};

