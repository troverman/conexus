/**
* Follower.js
*/

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
    
    getFollowers: function(followed_model) {
        return Follower.find()
        .sort({createdAt: 'desc'})
        .populate('followed')
        .populate('follower')
        .limit(1000)
        .where({followed: followed_model})
        .then(function (model) {
            return [model];
        });
    },

    getFollowing: function(follower_model) {
        return Follower.find()
        .sort({createdAt: 'desc'})
        .populate('followed')
        .populate('follower')
        .limit(1000)
        .where({follower: follower_model})
        .then(function (model) {
            return [model];
        });
    }

};

