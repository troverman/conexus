//GITHUB APP
//https://octokit.github.io/rest.js/
//const Octokit = require("@octokit/rest");
var App = {
	import:{},
    models:[
        //GITHUB,
        //GITHUB_ACCOUNT,
        //GITHUB_COMMIT,
        //GITHUB_ORGANIZATION,
        //GITHUB_REPO
    ],
   get:{
        //GET /repos/:owner/:repo/commits
        //GET /repos/:owner/:repo/commits/:ref
        //STATS.. 
        //GET /repos/:owner/:repo/traffic/popular/referrers
        //trees
        //GET /repos/:owner/:repo/git/trees/:tree_sha
        //GET /repos/:owner/:repo/git/trees/:tree_sha?recursive=1
        //stars
        //GET /repos/:owner/:repo/stargazers
        //get all files
            //store sha as token points for total app git intregration

		commit:function(model){},  
        repo:function(model){}, 
        organization:function(model){}, 

	},
	create:{
        commit:function(model){},  
        repo:function(model){}, 
        organization:function(model){}, 
        star: function(){},
        follow: function(){}
	},
	passport:{

	},
	//CRAWL
	//EARN MACHIENE ATTEION FOR RELAYING MESSAGES -- OTHERS CAN SYNC IN TO SELF VALIDATION BY POPULATNG AS WELL --> EXTERNAL TRUTH SOURCE 
	populate:{
		all:function(model){},
		commits:function(model){},  
        repos:function(model){}, 
        organizations:function(model){},
        members:function(model){},
	},
	//actionSet
    tokens:{
        model:{
            github:{
                create:{
                    commit:{
                        date:{},
                        id:{},
                    },
                    push:{},
                },
            }
        },
        get:function(model){
            var tokens = ethApp.tokens.model;
        },
    },
};
module.exports = App;