//CRE8.CONTENT
module.exports = {
	get: async function(input, output) {var model = await contentApp['GET'](input); output.json(model);},
	create: async function (input, output) {var newModel = await contentApp['CREATE'](input); output.json(newModel);}
};