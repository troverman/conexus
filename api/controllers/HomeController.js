module.exports = {
    index: function(req, res) {
        res.view({
            title: 'Home',
            currentUser: req.user
        });
    },
    ssl: function(req, res) {
    	res.send('C6ZD85-Tr5srNkC5aBAczAMEYMGqZ302dKArdb2vjwY.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI')
    },

};