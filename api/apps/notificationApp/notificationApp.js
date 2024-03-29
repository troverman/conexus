var App = {

	//THIS IS DYNAMIC
	//TRAVERSE APP-APP CONNECTIONS TO BUILD
	//DEFINE IN 'NOTIFICATION' ON RESPECTIVE APP IE 'VALIDATION'
	'DB': function(){return global['Notification']},

	'GET': async function(req){
		var limit = req.query.limit || 1;
		var skip = req.query.skip || 0;
		var sort = req.query.sort || 'createdAt DESC';
		if (req.query.user){
			if (req.query.isRead){return App['DB']().find({user:req.query.user, isRead:req.query.isRead}).limit(limit).skip(skip).sort(sort);}
			else{return App['DB']().find({user:req.query.user}).limit(limit).skip(skip).sort(sort);}
		}
		else{return App['DB']().find({}).limit(limit).skip(skip).sort(sort);}
	},

	//REDUCE.. 
	//TODO: && ASSSOICATION PARAMS
	//REDUCE TO MODEL PARAM AND SINGLE FXN
	'CREATE+VALIDATION': async function(user, model){
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
				apps:{member:model.user.id, project:model.project.id},
			}
		};
		//App['DB']().create(notificationModel).then(function(notification){
		//	console.log('CREATE NOTIFICATION', notification);
		//	App['DB']().publish([notification[0].id], {verb: 'create', data: associationModels[0].id});
		//});
	},
	'CREATE+TRANSACTION':async function (model){
		//IF MODEL.TO == PROJECT
			//SEND NOTIFICATIONS TO APPROPIATTE USER GROUP 
				//NOTIFICATION (APP) - PROJECT CONNECTION --> USER PERMS
		var notificationModel = {
			user: model.to,
			type: 'TRANSACTION',
			title: 'New Transaction',
			content:model.from+' sent you '+model.amountSet,
			data:{apps:{transaction: model}},
			priority:77,//defined by user
		};
		var newNotification = await App['DB']().create(notificationModel)
		App['DB']().publish([newNotification.id], {verb: 'update', data: newNotification});
	},
	'CREATE+TIME': async function(model){
		//REQUEST TO VALIDATE (ASSOCITION TRAVERSE)
		//TO MEMBERS OF PROJECT
		//TO FOLLOWERS OF MEMBER..
		//TO NOTIFICATION PERMS
	},
	'CREATE+REACTION': async function(model){
		var model = await App['DB']().create(model);
		App['DB']().publish([model.id], {verb: 'create', data: model});
	},
	'CREATE+PROJECT':async function(model){},

	'UPDATE': function(req){
		var id = req.param('id');
		var model = {isRead: req.param('isRead')};
		return App['DB']().update({id: id}, model);
	}

};
module.exports = App;