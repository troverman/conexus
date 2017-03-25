module.exports = {
    index: function(req, res) {
        res.view({
            title: 'Home',
            currentUser: req.user
        });
    },
    ssl: function(req, res) {
    	res.send('C0p71ZD63hNh7GqkHdFHPJPE1YKwRMhsU-UYkGQ7Y98.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI')
    },

};