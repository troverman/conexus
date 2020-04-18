//CRE8.TRANSACTION
module.exports = {
	get: async function(input, output) {var model = await transactionApp['GET'](input); output.json(model);},
	create: async function (input, output) {var newModel = await transactionApp['CREATE'](input) ;output.json(newModel);}
};