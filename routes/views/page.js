var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;
	locals.filters = {
		page: req.params.page
	};

	// Load the current post

	view.on('init', function(next) {

		var q = keystone.list('Page').model.findOne({
			slug: locals.filters.page
		});

		q.exec(function(err, result) {
			locals.data.page = result;
			next(err);
		});
	});

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'page';

	// Render the view
	view.render('page');

};
