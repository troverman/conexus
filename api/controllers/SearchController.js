/**
 * SearchController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	search: function (req, res) {
		var searchQuery = req.param('searchQuery');
		sails.log(searchQuery);
		//res.json(searchQuery);

		if(searchQuery == 'index') {
			Project.getAll()
			.spread(function(models) {
				Project.subscribe(req, models);
				res.json(models);
			});
		}
		else{
			Project.find()
			.where({
				//or: [
					title: {contains: searchQuery},
					//{urlTitle: {contains: searchQuery}},
					//{userId: {contains: searchQuery}}
				//]
			})
			.then(function(models) {
				Project.watch(req);
				Project.subscribe(req, models);
				res.json(models);
			})
			.fail(function(err) {
				// An error occured
			});
		}
	}	

};



/*
if(profession == 'all' && searchQuery.length == 0) {
	Post.find()
	.sort({createdAt: 'desc'})
	.exec(function (err, results) {
		res.view({
			results: results
		});
	});
} else if (profession == 'all' && searchQuery.length > 0) {
	Post.find()
	.where({
		or: [
			{jobDescription: {contains: searchQuery}},
			{jobTitle: {contains: searchQuery}},
			{companyName: {contains: searchQuery}},
			{homeOffice: {contains: searchQuery}}
		]
	})
	.sort({createdAt: 'desc'})
	.exec(function (err, results) {
		res.view({
			results: results
		});
	});
} else if (profession !== 'all' && searchQuery.length == 0) {
	Post.find()
	.where({
		profession: profession
	})
	.sort({createdAt: 'desc'})
	.exec(function (err, results) {
		res.view({
			results: results
		});
	});
} else {
	Post.find()
	.where({
		or: [
			{jobDescription: {contains: searchQuery}},
			{jobTitle: {contains: searchQuery}},
			{companyName: {contains: searchQuery}},
			{homeOffice: {contains: searchQuery}}
		]
	})
	.where({
		profession: profession
	})
	.sort({createdAt: 'desc'})
	.exec(function (err, results) {
		res.view({
			results: results
		});
	});
} 

*/
