//CRE8.PASSPORT.OAUTH
module.exports = function (req, token, tokenSecret, profile, next) {
	var query = {identifier:profile.id, protocol:'oauth', tokens:{token:token}};
	if (tokenSecret !== undefined) {query.tokens.tokenSecret = tokenSecret;}
	passport.connect(req, query, profile, next);
};
