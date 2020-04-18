//CRE8.USER
//TODO: RENAME TO MEMBER
//CRE8.MEMBER
module.exports = {
	get: async function(input, output) {var model = await memberApp['GET'](input); output.json(model);},
	update: async function (input, output) {var newModel = await memberApp['UPDATE'](input); output.json(newModel);}
};
