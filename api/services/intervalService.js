var request = require('request');

module.exports = {

	//TODO: MOVE OUT OF INTERVAL
	//TODO: TOKENIZE LOCATION | EXERCISE
	getData: function(req){

		var newOrderArray = [];

		for (var i = 0; i<10000; i++){
			var amount = Math.floor(Math.random()*160)
			newOrderArray.push({
				user:'5923b9cc5aac131100cab1c1', //creator
				amountSet:amount,
				amountSet1:10000*amount+Math.abs(Math.sin(i)+100*i*Math.random()),
				identiferSet:'CRE8',
				identiferSet1:'USD',
			});
		} 

		//console.log(newOrderArray);

		//Order.create(newOrderArray).then(function(){
		//	console.log('DONE', newOrderArray.length)
		//});

		var newOrderArray1 = [];

		for (var i = 0; i<10000; i++){
			var amount = Math.floor(Math.random()*160*10000)
			newOrderArray1.push({
				user:'5923b9cc5aac131100cab1c1', //creator
				amountSet:amount,
				amountSet1:amount/(10000*amount)+Math.abs(Math.sin(i)+100*i*Math.random()),
				identiferSet:'USD',
				identiferSet1:'CRE8',
			});
		} 

		//console.log(newOrderArray1);

		//Order.create(newOrderArray1).then(function(){
		//	console.log('DONE', newOrderArray1.length)
		//});

		
		Order.find().limit(20000).skip(0).sort('createdAt DESC').then(function(models){
			if (models.length > 0){
	    		var idArray = models.map(function(obj) {return obj.id});
				Order.destroy(idArray, function(err, model) {
					console.log(model);
				});
    		}
		});

		/*User.find().then(function(models){

			for (x in models){
				if(!models[x].coverUrl){
					var url = "https://api.unsplash.com/photos/random?page=1&client_id=b996e9314d68deae5fe37098f096cd6b3b035f5c63989805aa23d4bd8c7358a2&secret=2ddbfdd90eaf2bcfc6f3cec5ec58c677b35cb470dc63d39e0e0372755b59c434%27";
			       	(function(models, x){
				        request(url, function (error, response, body) {
				        	console.log(body)
				            models[x].coverUrl = body.urls.full;
				            User.update({id: models[x].id}, models[x])
				            .then(function(model){
				            	console.log(model);
				            });
				        });
			    	})(models, x);
				}
			}

		});*/

		/*
		User.findOne(req.id)
		.then(function(model) {

			var fitbitPassport = model.passports.filter(function(obj){return obj.provider=='fitbit'});
			var userId = fitbitPassport[0].identifier;
			var activity = 'steps';
			var peroid = '1m'; //1d, 7d, 30d, 1w, 1m
			var url = 'https://api.fitbit.com/1/user/' + userId + '/activities/' + activity + '/date/today/' + peroid + '.json';

			//NEED API PERMISSIONS... >:|
			//var url = 'https://api.fitbit.com/1/user/' + userId + '/activities/heart/date/2016-10-31/1d/1sec/time/00:00/00:01.json'

			var model= {
				url: url,
				json: true,
				headers: {'Authorization': ' Bearer ' + fitbitPassport[0].tokens.accessToken}
			};

			request(model, function (error, response, body) {
				//console.log(body['activities-heart'])
				//console.log(body)
			});

		})
		*/
	
	}

};