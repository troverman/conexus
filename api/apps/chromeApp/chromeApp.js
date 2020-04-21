//CRE8.CHROMEEXTENSION.ALPHA
//LET'S DO A DESIGN PATTERN
var App = {

	runtime:'chrome-extension',

	//dynmaic in create --> this is init app 
	manifest: {
		"name": "Decentralized Chrome Extension Application Manifest",
		"version": "0.08",
		"description": "Build an Extension!",
	    "permissions": ["storage"],
		"manifest_version": 2,
		"background": {
			"scripts": ["background.js"],
			"persistent": false
		},
	},

	connections: {
		apps: {
			//interveralServiceApp: interveralServiceApp,
		}
	},

	//expose storage 

	//https://developer.chrome.com/extensions/*

	//EXPOSES CHROME RUNTIME OBJECT AS A DATA MODEL TO BE LOADED IN USER PEERS IN CHROME ENVIR
	getChromObj: function(){},

	//CHROME PASSPORT FOR BROWSER HISTORY && ATTENTION
	history:function(chrome){
		chrome.history.search({text: '', maxResults: 10}, function(data) {
		    data.forEach(function(page) {
		        console.log(page.url);
		    });
		})
	},

	//LIVE EVENT LISTENRS
	//CREATE string - > int mapping of token address CHROME+URL+PAGE.URL
	//runtime:'chrome'
	watchPages:function(chrome){
		//CHROME RUNTIME .. 
		const attentionWatcher = function(){
			//init: 
		};

		//OPEN TABS
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		    var url = tabs[0].url;
		    //CHROME+URL+PAGE.URL
		    //Token.create(); 
		});
	}
};
module.exports = App;