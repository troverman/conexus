//CRE8.VALIDATION
module.exports = {
	get: async function(input, output) {var model = await validationApp['GET'](input); output.json(model);},
	create: async function (input, output) {var newModel = await validationApp['CREATE'](input);output.json(newModel);}
};