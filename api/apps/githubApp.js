//GITHUB APP
//https://octokit.github.io/rest.js/
//const Octokit = require("@octokit/rest");

module.exports = {

	import:{},

    models:[
        //GITHUB,
        //GITHUB_REPO,
        //GITHUB_COMMIT,
        //GITHUB_ORGANIZATION
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



    },

	create:{

        commit:function(model){},  
        repo:function(model){}, 
        organization:function(model){}, 

	},

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