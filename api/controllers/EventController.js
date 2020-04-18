//CRE8.EVENT
module.exports = {
	get: async function(input, output) {var model = await eventApp['GET'](input); output.json(model);},
	create: async function(input, output) {var model = await eventApp['CREATE'](input); output.json(model);},
};