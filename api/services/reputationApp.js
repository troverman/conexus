//CRE8.REPUTATION.ALPHA
module.exports = {

	//NO MATTER WHAT APPS HAVE CONNECTION APP IMPORT ~ LANGUAGE (TOO EARLY NOW_)
	//ONE MORE FACTOR AFTER THIS AND LANGUAGE WILL EMERGE

	//dataModel = struct {string:member, struct: mapping}; 
	//dataModel = mapping(string -> mapping(string))
	//dataModel = {member:{type:'string'}, reputation:type:'json'}

	//types = {string:'{type:'string'}', reputation:type:'json'}


	//IMPORTS
	//MEMBER APP
	//ATTENTION APP
	//ATTENTION
	//TIME APP
	//TASK APP
	//PROJECT APP
	//... APP - APP CONNECTION



	create:function(){},
	get:function(){},

	//TEMP
	//TODO: RESHAPE | BUILD
	//FOR THIS TO SCALE WE NEED A DATA MODEL 
	//SINGLE MAPPING
	//FRONT END DOES THAT DATA MODIFYING
		//IE IMMUTABLE MANIFOLD
			//IMMUTABLE+ (&or CREATECORE DEFINED REPUTTION+)
	build: async function(){
		var userModels = await User.find();
		for (x in userModels){
			var timeModels = await Time.find({user:userModels[x].id}).limit(10000).populate('task');
			var balances = {};
			//console.log(userModels[x].username, timeModels.length)
			for (y in timeModels){
				if (!balances[timeModels[y].id]){balances[timeModels[y].id] = parseFloat(timeModels[y].amount)}
				balances[timeModels[y].id] += parseFloat(timeModels[y].amount);
				if (timeModels[y].task && timeModels[y].task.tags){
					console.log(timeModels[y].task)
					for (z in timeModels[y].task.tags.split(',')){
						if (!balances[timeModels[y].task.tags.split(',')[z].replace(/\s/g, '').toUpperCase()]){balances[timeModels[y].task.tags.split(',')[z].replace(/\s/g, '').toUpperCase()] = parseFloat(balances[y].amount)}
						balances[timeModels[y].task.tags.split(',')[z].replace(/\s/g, '').toUpperCase()] += parseFloat(timeModels[y].amount);
					}
				}
			}
			var balance = Object.assign(balances, userModels[x].balance);
			if (balance['cre8']!=0){balance['cre8'] = 8};		
			var updatedUser = await User.update({id:userModels[x].id}, {balance:balance});
		}
	},
	


	
};