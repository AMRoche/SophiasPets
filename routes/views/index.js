var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {};

	// Load the current post
	view.on('init', function(next) {

var q = keystone.list('Page').model.find().where('showOnMenu', true).sort('menuOrder');

		q.exec(function(err, results) {
			locals.data.menuItems = results;
			next(err);
		});

	});

	// Render the view
	view.render('index');

};
