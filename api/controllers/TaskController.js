//CRE8.TASK
module.exports = {
	get: async function(input, output) {var model = await taskApp['GET'](input); output.json(model);},
	create: async function (input, output) {var newModel = await taskApp['CREATE'](input); output.json(newModel);}
};


