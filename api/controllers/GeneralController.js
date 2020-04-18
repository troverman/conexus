//CRE8.API
module.exports = async function(input, output) {
	//activity processor :: abstraction 
	//SHIM UNTIL WE REBIND HTTP ROUTES IN APP DEFINITIONS 
	//var model = await [input.string][input.type](input); 
	var model = await global[input.app][input.protocol](input);
	//Global.string:: ROUTER APP
	output.json(model);
};