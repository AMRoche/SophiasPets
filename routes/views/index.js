var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	pickIndex();

	function pickIndex(){
		var q = keystone.list('Page').model.findOne({
			mainPage: true
		});

		q.exec(function(err, result) {
			locals.data.page = result;

			if(locals.data.page != null)
			{
				view.render('page');
			}
			else
			{
				view.render('index');
			}
		});
	}

	locals.section = 'home';
};
