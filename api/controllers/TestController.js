module.exports = {
    index: function(req, res) {

    	var testItems = [
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'},
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'}
        ];

        User.find({username:'troverman'}).exec(function (err, found){

            res.view('test/index', {
                //members: users,
                testItems: User.find().exec(function(err, users) {
                    if (err) throw err;
                    return users;
                }),
                this_is_a_test: found
            });

        });

        //User.find().exec(function(err, users) {
        	//if (err) throw err;
            //res.view({
                //members: users,
                //testItems: testItems,
                //this_is_a_test: this_is_a_test,
            //});
        //});

		//same as above
     	/*User.getAll().spread(function(models) {
            res.view({
                members: models,
                testItems: testItems
            })
           	.fail(function(err) {});
        });*/
    },

    destroy: function() {},

    getAll: function(req, res) {
        Post.find().exec(function(err, users) {
            if (err) throw err;
            res.json(users);
        });
    },

    getOne: function(req, res) {
        Post.getOne(req.param('id'))
        .spread(function(model) {
            res.json(model);
        })
        .fail(function(err) {
            // res.send(404);
        });
    },

    //getByUrlTitle: function(req, res) {
        //Post.getByUrlTitle(req.param('url_title'))
        //.spread(function(model) {
            //res.json(model);
        //})
        //.fail(function(err) {
            // res.send(404);
        //});
    //},

    vote: function() {}

};