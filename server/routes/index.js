/**
 * Routes index
 *
 * @date 2018-01-07
 * @author Ziwon
 * @updated 2018-01-13
 * @updated_by Ziwon
 * @update_log
 *
 */

'use strict';

const
	rootRoute = require('./root'),
	orderRoute = require('./order');

function init(app) {
	app.get('*', function (req, res, next) {
		console.log('Request was made to: ' + req.originalUrl);
		return next();
	});

	app.use('/', rootRoute);
    app.use('/order', orderRoute);

	app.use('/error', function (req, res){
		res.render('pages/error', {
			title: 'Error'
		});
	});
	app.use(function(req,res){
		res.redirect('/error');
	})
}

module.exports = {
	init
};
