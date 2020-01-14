//CRE8.ACTION.ALPHA

const Q = require('q');
const crypto = require('crypto');

module.exports = {

	//TODO: API OVERWRITE FOR ROUTING
	//API APP
		//ROUTING APP
			//--> HTTP APP

	attributes: {

    	//TODO: DEFINE

    	//DEPRECIATE
    	model: {type: 'string', defaultsTo: 'ACTION'},

  	    amount: {type: 'string'},
		type: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        data: {type: 'json'},
    },

	'routes':{

	},

	get: async function(req){

		//PARSE QUERY
			//QUERY PARSE APP <:P

		var limit = parseInt(req.query.limit) || 1;
		var skip = parseInt(req.query.skip) || 0;
		var sort = req.query.sort;
		var id = req.query.id;

		console.log('GET ACTION', req.query);

		if(req.query.id){return Action.find({id:id}).limit(limit).skip(skip).sort(sort);}
		//TODO: ASSOCIATION
		//TODO: ITEM ASSOCIATION
		else{return Action.find({}).limit(20).skip(skip).sort(sort);}

	},

	create:async function(req){
		var model = {
			model: 'ACTION',
			type: req.param('type'),
			amount: req.param('amount'),
			associatedModels: req.param('associatedModels'),
			user: req.param('user'),
			data:{apps:{reactions:{plus:0,minus:0},attention:{general:0}}}
		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		//Action.publishCreate(model);
		//Action.publish([model.id], {verb: 'create', data: model});
		return Action.create(model)
	},

	
};