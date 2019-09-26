//CRE8.PASSPORT.OAUTH2
module.exports = function (req, accessToken, refreshToken, profile, next) {
	var query = {identifier : profile.id, protocol: 'oauth2', tokens: { accessToken: accessToken }};
	if (refreshToken !== undefined) {query.tokens.refreshToken = refreshToken;}
	passport.connect(req, query, profile, next);
};
