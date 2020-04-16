//CRE8.APP
//REDUCT AND FACTOR 
module.exports = {
	get: async function(req, res) {var model = await appApp['GET'](req); res.json(model);},
	create: async function (req, res) {var newModel = await appApp['CREATE'](req); res.json(newModel);}
};