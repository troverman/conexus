module.exports = {
    index: function(req, res) {
        res.view({
            title: 'Home',
            currentUser: req.user
        });
    },
    ssl: function(req, res) {
    	res.send('cV2kFOb-PA_snEp6iR9udCIa1XFiJ8tm3JZkYOouqmw.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI')
    },

};