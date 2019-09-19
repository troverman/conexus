//CRE8.FOLLOWER
//DEPRECIATE!
module.exports = {
	attributes: {
        followed: {
            model: 'user',
            required: true
        },
        follower: {
            model: 'user',
            required: true
        }
    },
    beforeCreate: function(model, next) {
        if (model.follower != model.followed){
            Follower.find({followed:model.followed, follower:model.follower}).then(function(followerModel){
                if (followerModel.length == 0){next()}
            });
        }
    },
};

