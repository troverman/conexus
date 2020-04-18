//CRE8.LOCATION
module.exports = {
	get: async function(input, output) {var model = await locationApp['GET'](input); output.json(model);},	
};