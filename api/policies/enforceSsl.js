module.exports = function(req, res, next) {
	if ((req.headers['x-forwarded-proto'] == 'http') && (process.env.NODE_ENV === 'production')) {
		return res.redirect([
			'https://',
			req.host,
			req.url
		].join(''));
	}
	//if(req.isSocket){res.redirect('wss://' + req.host + req.url)}
	else {next()}
};