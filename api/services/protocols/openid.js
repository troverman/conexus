//CRE8.PASSPORT.OPENID
module.exports = function (req, identifier, profile, next) {
	var query = {identifier: identifier, protocol: 'openid'};
	passport.connect(req, query, profile, next);
};
