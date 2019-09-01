module.exports = {
    index: function(req, res) {
    	//POST SESSION IN VIEW
    	//DECENTRALIZE SESSION MANAGEMENT...
    	

    	//BASED ON APPS.. POPULATE USER INFORMATION
    	//SOLVES THE PROBLEM OF JUST .id RENDER

        res.view({currentUser: req.user});
    }, 
    ssl: function(req, res) {
    	res.send('9gf-zaOshMDeJUOaL0j2lH7TnRTNxau1eF2z06fav-I.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI')
    },
};