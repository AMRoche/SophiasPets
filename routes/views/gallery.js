var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;
	locals.filters = {
		page: req.params.page
	};

	// Load the current post

	view.on('init', function(next) {

		var q = keystone.list('Gallery').model.findOne({
			slug: locals.filters.page
		});

		q.exec(function(err, result) {
			locals.data.page = result;
			locals.section = result.slug;
			next(err);
		});
	});
	// Render the view
	view.render('gallery');

};
