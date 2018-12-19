/**
 * ViewController | TIME? --> TYPE AND DATA SOURCE. 
 */

module.exports = {

	getOne: function(req, res) {
		View.findOne(req.param('id'))
        .then(function (model) {
			res.json(model);
        });
	},

	getSome: function(req, res) {

		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		
	},

	create: function (req, res) {
		var model = {

		};

		View.create(model)
		.exec(function(err, view) {
			if (err) {return console.log(err);}
			else {
				View.publishCreate(view);
				res.json(view);
			}
		});
	},

	update: function(req, res) {
		var id = req.param('id');
		//AND CREATE VERIFICATION..
		var model = {verificationScore: 100};
		View.update({id: id}, model).exec(function afterwards(err, updated){
		  if (err) {return;}
		});
	},
	
};

