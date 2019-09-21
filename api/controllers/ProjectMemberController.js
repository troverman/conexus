//DEPRECIATE
//CRE8.PROJECTMEMBER
module.exports = {
	get: function(req, res) {
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		var project = req.query.project;
		var user = req.query.user;
		if (req.query.project){ProjectMember.find({project:project}).limit(limit).skip(skip).sort(sort).populate('user').populate('project').then(function(models) {res.json(models);});}
		else if(req.query.user){ProjectMember.find({user:user}).limit(limit).skip(skip).sort(sort).populate('user').populate('project').then(function(models) {res.json(models);});}
	},
	create: function (req, res) {
		var model = {project: req.param('project'),user: req.param('user')};
		ProjectMember.create(model).exec(function(err, projectMember) {});
	}
};