//DEPRECIATE
//CRE8.PROJECTMEMBER

module.exports = {

	get: function(req, res) {
		
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		var project = req.query.project;
		var user = req.query.user;

		ProjectMember.watch(req);
		if (req.query.project){
			ProjectMember.find({project:project})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				ProjectMember.subscribe(req, models);
				res.json(models);
			});
		}

		else if(req.query.user){
			ProjectMember.find({user:user})
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.populate('user')
			.populate('project')
			.then(function(models) {
				ProjectMember.subscribe(req, models);
				res.json(models);
			});
		}

	},

	create: function (req, res) {

		function createNotification(model, user){

			//NOTIFICATIONS APP-MEMBER ASSOCIATION
				//FIND PRIORITY MAPPINGS
					//TYPE IS IN MODEL 
						//GLOBAL FX

			//USER.FIND --> IF USER NOTIFICATION PERMISSION
			var notificationModel = {
				user: user,
				type: 'VALIDATION',
				title: 'Request to Join',
				content:'New Member, '+model.user.username +' is requesting membership validation for '+model.project.title,
				priority: 100,
				isRead: false,
				data:{
					apps:{
						member:model.user.id, 
						project:model.project.id
					},
				}
			};

			Notification.create(notificationModel).then(function(notification){
				console.log('CREATE NOTIFICATION', notification);
				Notification.publishCreate(notification);
			});

		};

		Project.find({id:req.param('project')}).then(function(projectModels){

			//to allow for complex - recursive
			var defaultCharter = {
				validation:{
					self:{
						title:{
							changeApproval:{
								//variables available.. members.. etc
								//context:{general:100xmember} //everyone must validtion 100
								//variable governance.... 
								//relation between approval threshold.. and rep x validation context ....
								reputationWeight:{
									context:'1-to-1',
									//variables available
									functional:'{reputation}x{valicationContext}',
								},
								context:{contextString:'Absolute Approval Value'}
							},
							//mb in own charter obj
							//charterChangeApproval:{}
						},
						description:{},
						location:{},
					},
					//logic for 'MEMBERSHIP' -- GIVE IT SPACE
					member:{}
				}
			};

			//need to take into account validation type 
			var charter = {
				//PERMISSIONS...
				membership:{
					//ARE TYPE NEEDED? FOR FLEXABILITY YOU PLURALIST ! 
					//BASICALLY.. REQUEST FOR PROJECT PERMISSIONS 
					//(META VALIDATION CHARTER IS CAN NON REMEMBERS REQUEST SAY PROEJCT-TASK-TIME)
					types:[
						{
							title:'Member',
							//hmm
							permissions:[
								//canCreateAssociation:'withValidation',
								//canValidate:true, --> this is large.. 
								{reputationMultiplier:1}
							],
							requireValidation:true,
							//ABSOLUTE BASED ON CONEXT REP
							//% based on 
							//weighted -- is truth.. 
							//allow for choice
							membershipValidationThreshold:[
								{
									context:'GENERAL', 
									amount:'{totalMemberRep}/100',
								}
							]
						},
						{
							title:'Creator',
							permissions:[],
							requireValidation:true,
							membershipValidationThreshold:[{context:'{project}', amount:'{totalMemberRep}'}]
						}
					],
				},
				//TBD..
				validation:{
					self:{
						//edit project.. &/ charter
					},
					content:{
						reputationDecayFunction:{},
						//for association -- smooth & discrete -- can be both .. functional asymtote -- leave the choice to the members 
						//validationThreshold:[{context:'{project}', amount:'{totalMemberRep}'}]
					},
					item:{
						reputationDecayFunction:{},
					},
					member:{},
					order:{},
					project:{
						//bifurcation -- interlinking for project association... need compatabile charters 
					},
					task:{},
					time:{},
					transaction:{
						manifolds:[],
						tokens:[],
						reputationDecayFunction:[{}],
						validationThreshold:[{context:'{project}', amount:'{totalMemberRep}'}]
						//specific tokens -- and manifolds 
					},
					//challange a validation -- recursive .. 
					validation:{
						self:{},
						content:{},
						item:{},
						member:{},
						order:{},
						project:{},
						task:{},
						time:{},
						transaction:{},
                        validation:{},
					}
					//APP SPECIFIC OBJs - MODELS
					//global
					//reputationDecayFunction:['{%t}'] // LINEAR, NONE.. OTHER VARIABLES..
				},
				manifolds:[{
					title:'{project}+',
					description:'',
					mintingLogic:'{app:id}', //motion to mint.. && --> be CREATIVE! APP layer.. 
					//(abstract) the bridge of connection between {proj} tokens to TASK <--> TIME validation . . . 
					//transfer logic in {validation:transaction }
				}],
				tokens:[],
			};

			var model = {
				project: req.param('project'),
				user: req.param('user'),
				type: req.param('type'),
				status: 'PENDING'
			};
			ProjectMember.create(model)
			.exec(function(err, projectMember) {
				if (err) {return console.log(err);}
				else {
					console.log('CREATE PROJECT MEMBER', model);
					User.find({id:model.user}).then(function(userModels){
						ProjectMember.find({project:model.project}).then(function(projectMembers){
							//TODO: USER --> MEMBER
							projectMember.user = userModels[0];
							projectMember.project = projectMembers[0];
							//REMOVE SELF NOTIFICATION.. LOL
							projectMembers = projectMembers.filter(function(obj){return obj.user !== userModels[0].id;});
							for (x in projectMembers){createNotification(projectMember, projectMembers[x]);}
						});
						//UPDATE COUNTS..
						//STORED IN APPS?
						//data:{
							//apps:{
							//	associations:{
							//		tasks:0
							//	}
							//}
						//}
					});
				}
			});
		});
	}
};