//CRE8.TOKEN
module.exports = {
	get: async function(input, output) {var model = await tokenApp['GET'](input); output.json(model);}
};