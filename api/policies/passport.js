
//TODO: REDUCE THIS 
//TODO: SESSION APP
//TODO: PASSPORT-SESSION CONNECTION

module.exports = function (req, res, next) {
  // Initialize Passport
  passportApp.initialize()(req, res, function () {
	// Use the built-in sessions
	passportApp.session()(req, res, function () {
		// Make the user available throughout the frontend
		res.locals.user = req.user;
		next();
	});
  });
};
