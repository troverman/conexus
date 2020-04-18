//CRE8.NOTIFICATION
module.exports = {
	get: async function(input, output) {var model = await notificationApp['GET'](input); output.json(model);},
	update: async function (input, output) {var newModel = await notificationApp['UPDATE'](input); output.json(newModel);}
};

