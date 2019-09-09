/**
 * Connections
 */
 
module.exports.connections = {

	//TODO: SECURITY --> HMM PEER SECURITY
	productionMongoHqDb: {
		adapter: 'sails-mongo',
		url: 'mongodb://heroku_vt7lbmkd:757kfop5h6loqicvfph68q41le@ds219648-a0.mlab.com:19648,ds219648-a1.mlab.com:19648/heroku_vt7lbmkd?replicaSet=rs-ds219648'
	}
};

