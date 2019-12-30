module.exports.bootstrap = function(cb) {
	initApp.init();
	cb();
};
