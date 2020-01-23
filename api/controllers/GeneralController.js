//CRE8.API
module.exports = async function(req, res) {

	//SHIM UNTIL WE REBIND HTTP ROUTES IN APP DEFINITIONS 
	var model = await [req.app][req.function](req); 
	res.json(model);

};