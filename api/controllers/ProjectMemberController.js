/**
 * ProjectMemberController
 */

module.exports = {

	getSome: function(req, res) {
		
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		var project = req.query.project;
		var user = req.query.user;

		console.log(req.query);

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

		else{
			ProjectMember.find({})
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

		//RECURSIZE POPULATE..
		//populateAssociations
		//TODO.. await...
		//TODO.. GENERAL GET SOME REQUEST.. COMPLEX QUERY. --> WILL USE SAME QUERY STRUCTURE INTERNALLY US WRITING DIFF CONTEXT SPECIFIC FXNS
		//master getSome(complexFilter)
		function getSome(model){
			var deferred = Q.defer();

			//TODO
			if (model.type == 'MEMBER'){
				User.find({id:model.id}).then(function(memberModels){
					deferred.resolve(userModels[0])
				});
			}

			if (model.type == 'PROJECT'){
				Project.find({id:model.id}).then(function(projectmodles){
					deferred.resolve(projectmodles[0]);
				});
			}

			if (model.type == 'TASK'){
				Member.find({id:model.id}).then(function(taskModels){
					deferred.resolve(taskModels[0]);
				});
			}

			if (model.type == 'TIME'){
				Time.find({id:model.id}).then(function(timeModels){
					deferred.resolve(timeModels[0]);
				});
			}

			return deferred.promise;
		};


		//TODO: CREATE VALIDATION
		//ALLIGN WITH VALIDATION CREATE! 
		//CREATE ALL MODEL HELPER GET FUNCTIONS AND POPULATE BASED ON THE TWO YOU CAN GET IN THE ASSOCIATION MODELS QUERY ON CREATE VALIDAION
		//var promises = [];
		//for (x in newValidation.associatedModels){
			//promises.push(getSome(newValidation.associatedModels[x].type));
			//newValidation.associatedModels[x].type == 'PROJECT'
		//}
		//var promises = [];
		//for (x in models){
		//	promises.push(getTo(models[x]));
		//	promises.push(getFrom(models[x]));
		//}
		//Q.all(promises).then((populatedModels)=>{
		//	var sum = 0;
		//	for (x in models){
		//		models[x].to = populatedModels[sum];
		//		sum++
		//		models[x].from = populatedModels[sum];
		//		sum++;
		//	}
		//	res.json(models);
		//});

		Project.find({id:req.param('project')}).then(function(projectModels){

			//projectModels[0].charter
			//RULES FOR JOIN

			//1st draft -
			//WE CAN REORGANIZE THIS :)
	
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

				//EXTRA INFORMATION IN VALIDATION... TYPE IS A CONTEXT.. ? ---(SELF ORGANIZED BUNDLES OF CONTEXT --> MEMBER TYPE)
				//TYPE --> HERE'S YA LIQUID DEMOCRACY --> VOTER 
				type: req.param('type'),
				//BASED ON CHARTER
				status: 'PENDING'
			};

			//Validation.create(model).then(function(validation) {});

			ProjectMember.create(model)
			.exec(function(err, projectMember) {
				if (err) {return console.log(err);}
				else {

					console.log('CREATE PROJECT MEMBER', model);

					User.find({id:model.user}).then(function(userModels){
						//projectModels[0].charter
						ProjectMember.find({project:model.project}).then(function(projectMembers){

							//TODO: USER --> MEMBER
							projectMember.user = userModels[0];
							
							//REMOVE SELF NOTIFICATION.. LOL
							projectMembers = projectMembers.filter(function(obj){
							    return obj.user !== userModels[0].id;
							});


							//NOTIFICATION SETTINGS..
							//TYPES OF ASSOCIATIONS
							//MEMBER-PROJECT
							//TASK-TIME
							//TASK-PROJECT
							//TIME-TASK-PROJECT
							//TIME-TASK-
							//VALIDATION-VALIDATION
							//ALL COMBOS. . .

							//NOTIFICATION RULES.. LOL
							//	if associatedModels[0] || associatedModels[1] type == Member
							//		-->check member notification settions
							//	if associatedModels[0] || associatedModels[1] type == Member
								//--> check project charter



							for (x in projectMembers){

								//USER.FIND --> IF USER NOTIFICATION PERMISSION
								var notificationModel = {
									user: projectMembers[x].user,
									type: 'VALIDATION',
									title: 'Request to Join',
									content:'New Member, '+userModels[0].username +' is requesting membership validation for '+projectModels[0].title,
									priority: 100, //BASED ON PERMISSIONS
									isRead: false,
									info:{member:userModels[0], project:projectModels[0]},
								};

								Notification.create(notificationModel).then(function(notification){
									console.log('CREATE NOTIFICATION', notification);
									Notification.publishCreate(notification);
								});
							}
						});

						ProjectMember.find({user:model.user}).then(function(projectMemberModel){
							var projectCount = 0;
							projectCount = projectMemberModel.length;
							User.update({id:model.user}, {projectCount:projectCount}).then(function(user){});
							ProjectMember.publishCreate(projectMember);
							res.json(projectMember);
						});
					});
				}
			});
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		ProjectMember.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			ProjectMember.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				ProjectMember.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

