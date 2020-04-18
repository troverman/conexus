//CRE8.ITEM
module.exports = {
	get: async function(input, output) {var model = await itemApp['GET'](input); output.json(model);},
	create: async function (input, output) {var newModel = await itemApp['CREATE'](input); output.json(newModel);}
};