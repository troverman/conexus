
module.exports = {

	parseQuery:function(queryModel){

		//THINK
		var mongoQuery = {
			filter:{
				$or:[],
				$and:[]
			},
			params:{
				limit:1,
				skip:0,
				sort:{'createdAt':-1}
			}
		};
		var mongoQuery = {
			$or:[],
			$and:[]
		};
		for (x in queryModel){
			if (queryModel[x].chain){
				var topBool = null;
				if (queryModel[x].chain == 'AND'){topBool = '$and';}
				if (queryModel[x].chain == 'OR'){topBool = '$or';}
			}
			if (queryModel[x].filter){
				for (y in queryModel[x].filter){
					var queryObj = {};
					queryObj[queryModel[x].filter[y].modelParam] = queryModel[x].filter[y].query;
					if (!queryModel[x].filter[y].chain){mongoQuery[topBool].push(queryObj);}
					if (queryModel[x].filter[y].chain){
						if (queryModel[x].filter[y].chain == 'AND'){
							if (topBool){
								var index = mongoQuery[topBool].map(function(obj){return Object.keys(obj)[0]}).indexOf('$and');
								if (index ==-1){mongoQuery[topBool].push({$and:[queryObj]});}
								else{mongoQuery[topBool][index]['$and'].push(queryObj);}
							}
						}
						if (queryModel[x].filter[y].chain == 'OR'){
							if (topBool){
								var index = mongoQuery[topBool].map(function(obj){return Object.keys(obj)[0]}).indexOf('$or');
								if (index ==-1){mongoQuery[topBool].push({$or:[queryObj]});}
								else{mongoQuery[topBool][index]['$or'].push(queryObj);}
							}
						}
					}
				}
			}
		}
		if (mongoQuery.$or.length == 0){ delete mongoQuery.$or}
		if (mongoQuery.$and.length == 0){ delete mongoQuery.$and}
		return mongoQuery

	}

};