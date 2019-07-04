/**
* ProjectMember.js
*/

module.exports = {

	attributes: {

        project: {model: 'project'},

        //TODO: MEMBER.. RENAME
        user: {model: 'user'},

        //HOW MUCH OF A MEMBER ARE YOU.. 
        //ASSOCIATION CONTEXT AND REPUTATION COMPARED TO CHARTER

    },

    beforeCreate: function(model, next) {
        ProjectMember.find({user:model.user, project:model.project}).then(function(projectMemberModel){
            if (projectMemberModel.length == 0){next()}
        });
    },
 
};

