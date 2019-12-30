module.exports = {
    index: function(req, res) {
    	//POST SESSION IN VIEW
    	//PPER SESSION MANAGEMENT...
    	//BASED ON APPS.. POPULATE USER INFORMATION
    	//SOLVES THE PROBLEM OF JUST .id RENDER
        res.view({currentUser: req.user});
    }
};