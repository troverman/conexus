//CRE8.PROJECT
module.exports = {
	get: async function(input, output) {var model = await projectApp['GET'](input); output.json(model);},
	create: async function (input, output) {var newModel = await projectApp['CREATE'](input); output.json(newModel);}
};