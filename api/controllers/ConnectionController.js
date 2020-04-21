//CRE8.CONNECTION
module.exports = {
	get: async function(input, output) {var model = await connectionApp['GET'](input); output.json(model);},
	create: async function (input, res) {var newModel = await connectionApp['CREATE'](input); output.json(newModel);}
};