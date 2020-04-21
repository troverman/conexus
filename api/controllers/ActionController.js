//CRE8.__ITEM__ACTION
module.exports = {
	get: async function(input, output) {var model = await actionApp['GET'](input); output.json(model);},
	create: async function (input, output) {var newModel = await actionApp['CREATE'](input); output.json(newModel);},
};