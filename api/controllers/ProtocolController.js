//CRE8.APP
//REDUCT AND FACTOR 
module.exports = {
	get: async function(input, output) {var model = await protocolApp['GET'](input); output.json(model);},
	create: async function (input, output) {var newModel = await protocolApp['CREATE'](input); output.json(newModel);}
};