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


		Project.find({id:req.param('project')}).then(function(projectModels){

			//projectModels[0].charter
			//RULES FOR JOIN

			//1st draft -
			//WE CAN REORGANIZE THIS :)
	
			var charter = {

				//PERMISSIONS...
				membership:{
					//ARE TYPE NEEDED? FOR FLEXABILITY YOU PLURALIST ! 
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

			},

			var model = {
				project: req.param('project'),
				user: req.param('user'),
				//validation: 0
				//TYPE --> HERE'S YA LIQUID DEMOCRACY --> VOTER 
				type: req.param('type'),
				//BASED ON CHARTER
				status: 'PENDING'
			};

			//ACUTALLY MOTION TO JOIN.. THIS IS JOIN FIRST ASK QUESTIONS LATER.. RATHER A NOTIFICATION TO A NEW MEMBER.. 
			ProjectMember.create(model)
			.exec(function(err, member) {
				if (err) {return console.log(err);}
				else {

					User.find({id:model.user}).then(function(userModels){
						//projectModels[0].charter
						ProjectMember.find({project:model.project}).then(function(projectMembers){
							for (x in projectMembers){
								var notificationModel = {
									user: projectMembers[x],
									type: 'Request to Join',
									content:'New Member, '+userModels[0].id +'is requesting membership validation for '+projectModels[0].id,
								};
								Notification.create(notificationModel).then(function(notification){
									Notification.publishCreate(notification[0]);
								});
							}
						});

						ProjectMember.find({user:model.user}).then(function(projectMemberModel){
							var projectCount = 0;
							projectCount = projectMemberModel.length;
							User.update({id:model.user}, {projectCount:projectCount}).then(function(user){});
							ProjectMember.publishCreate(member);
							res.json(member);
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

