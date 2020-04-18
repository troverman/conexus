//CRE8.TIME
module.exports = {
	get: async function(input, output) {var model = await timeApp['GET'](input); output.json(model);},
	create: async function (input, output) {var newModel = await timeApp['CREATE'](input); output.json(newModel);}
};