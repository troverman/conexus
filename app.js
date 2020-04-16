//TODO :: CRE8^XYZ
process.chdir(__dirname);
var peer = require('./api/core');

//MONADIC SELF LOADER
dynamicModuleLoader = (model) => {
	//var source :: REGISTRY :: PEER DISCOVERY ... DIALING
	//BUILD INTO PEER (GLOBAL VARIABLE STRUCTURING && DYNAMIC SHARING <VIA DATA MODEL>)
};

//MOKEY PATCH:::
appApp = {
	'GET':function(model){
		if (model.type == 'require'){return require(model.string);}
		if (model.type == 'hash'){return this['GET+HASH'](model);}
		if (model.type == 'string'){return this['GET+STRUBG'](model);}
	},
	'GET+REQUIRE':function(model){return require(model);},
	'GET+STRING':function(model){},
};

peer.lift();