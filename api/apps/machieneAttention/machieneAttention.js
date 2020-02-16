var App = {
	//LETS NOT REPEAT OURSELVES TOO MUCH
	//MACHIENE ATTENTION AND BUDGETING 
	//MANIFEST THOUGH ACTIVTY PROCESSING IE INSTA, TWIT, && ART AUTOMATION
	import:{
		StackTrace: require('stack-trace'),
	},
	//meta-logger
	//FXN WRAPPER / LOGGER 
	init: function(){

		//var trace = App.import.StackTrace.get();
		//trace.map(function(obj){console.log(obj.getFileName())});
		//console.log(trace[0].getFileName(), trace[0].getFileName())

		//MACHIENE ATTENTION ...
		//const escomplex = require('escomplex');
		//const result = escomplex.analyse(''); //--> analyzes the O(n) complexity of the code --> do on compile vs runtime -- ~
		//console.log(result);
		//STATE PROCESSOR GETS THE REWARD ... THE ATTENTION SHARED 

		//EXTERNAL
		//var trace = await App.import.stackTrace.get().catch(function(err){});
		//console.log(trace.map(function(obj){return obj.functionName}));})

		//ADD TO ALL FUNCTIONS
		//ABSTRACT TO LANGUAGE LEVEL --> :) (COMPILER APPS)

		//NEED FLAT MAPPING OF ENTIRE PEER 
			//NETWORKED CALLS CAN AVE BUDGETING .. 
				//ADDS APPROPIATE CONTEXT CHAIN | GRAPH | NETWORK TO FXN CALL

		//NEVER TOO MUCH 
		//OKAY WE WILL ITERATE .. 
		let runTimeFunctionMapping = {};
		var oldCall = Function.prototype.call;
		var newCall = function(self) {
			Function.prototype.call = oldCall;
			//POTIENTALLY REDUCE TO NAMED FUNCTION MAPPING (WILL CREATE ON PEER SELECTION) 
			//|| WHAT VARIENTS OF MACHIENE ATTENTION IS RELEVANT ?
			if (this.name){
				var trace = App.import.StackTrace.get();
				//console.log(trace[0].getFileName());
				//trace.map(function(obj){console.log(obj.getFileName())});
				//EVENT TO BRODCASE TO PEERS WHO WHICH TO LISTEN AND SELF
					//LISTEING TO PEERS WHICH I SHARE TRUTH WITH BASED ON MY-M.D-CONSENSUS CONSENSUSAPP ||> TRUTHFOREST IS A CONSENSUS || 
				console.log('Function called:', this.name);
				if (!runTimeFunctionMapping[this.name]){runTimeFunctionMapping[this.name]=1;}
				else{runTimeFunctionMapping[this.name]++;}
			}
			var args = Array.prototype.slice.call(arguments, 1);
			var res = this.apply(self, args);
			Function.prototype.call = newCall;
			return res;
		}
		Function.prototype.call = newCall;

		//SEND MACHIENE ATTENTION MAPPING EVERY SET
		//NEED STACK TRACE .. FOR FULL FXN 
		setInterval(function(){console.log(runTimeFunctionMapping)},1000)

		//CALL BUDGET

	},
};
module.exports = App;