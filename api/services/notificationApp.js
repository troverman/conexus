//CRE8.EVENT.ALPHA
module.exports = {

	//THIS IS DYNAMIC
	//TRAVERSE APP-APP CONNECTIONS TO BUILD
		//DEFINE IN 'NOTIFICATION' ON RESPECTIVE APP IE 'VALIDATION'

	create: {

		validation: async function(user, model){

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
			//Notification.create(notificationModel).then(function(notification){
			//	console.log('CREATE NOTIFICATION', notification);
			//	Notification.publish([notification[0].id], {verb: 'create', data: associationModels[0].id});
			//});

		},

		transaction: async function (model){

			//IF MODEL.TO == PROJECT
				//SEND NOTIFICATIONS TO APPROPIATTE USER GROUP 
					//NOTIFICATION (APP) - PROJECT CONNECTION --> USER PERMS
			var notificationModel = {
				user: model.to,
				type: 'TRANSACTION',
				title: 'New Transaction',
				content:model.from+' sent you '+model.amountSet,
				data:{
					apps:{
						transaction: model
					}
				},
				priority:77,//defined by user
			};

			var newNotification = await Notification.create(notificationModel)
			Notification.publish([newNotification.id], {verb: 'update', data: newNotification});

		},

		time: async function(model){

			//REQUEST TO VALIDATE (ASSOCITION TRAVERSE)
			//TO MEMBERS OF PROJECT
			//TO FOLLOWERS OF MEMBER..
			//TO NOTIFICATION PERMS

		},

		reaction: async function(model){
			var model = await Notification.create(notificationModel);
			console.log('CREATE NOTIFICATION', model);
			Notification.publish([model.id], {verb: 'create', data: model});
		},

	},

};