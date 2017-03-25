module.exports = {
    index: function(req, res) {
        res.view({
            title: 'Home',
            currentUser: req.user
        });
    },
    ssl: function(req, res) {
    	res.send('w2T3bSE5RFiLHGWHoyBEIQjLP67A1k2MbbpP9tq-Mmw.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI')
    },

};