//CRE8.ACTIVITY
module.exports = {
	get: async function(input, output) {var model = await activityApp['GET'](input); output.json(model);},
	create: async function (input, output) {var newModel = await actionApp['CREATE'](input); output.json(newModel);},
};