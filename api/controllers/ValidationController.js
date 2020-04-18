//CRE8.VALIDATION
module.exports = {
	get: async function(input, output) {var model = await validationApp['GET'](input); res.json(output);},
	create: async function (input, output) {var newModel = await validationApp['CREATE'](input);res.json(output);}
};