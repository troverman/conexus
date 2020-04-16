//CRE8.APP
//REDUCT AND FACTOR 
module.exports = {
	get: async function(req, res) {var model = await protocolApp['GET'](req); res.json(model);},
	create: async function (req, res) {var newModel = await protocolApp['CREATE'](req); res.json(newModel);}
};