//CRE8.APP
//REDUCT AND FACTOR 
module.exports = {
	get: async function(input, output) {var model = await protocolApp['GET'](input); res.json(output);},
	create: async function (input, output) {var newModel = await protocolApp['CREATE'](input); res.json(output);}
};