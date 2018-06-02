/**
 * Routes index
 *
 * @date 2018-06-02
 * @author Ziwon
 *
 */

'use strict';

const
	rootRoute = require('./root'),
    buyItemRoute = require('./buy_item'),
	orderRoute = require('./order');

function init(app) {
	app.get('*', function (req, res, next) {
		console.log('Request was made to: ' + req.originalUrl);
		return next();
	});

	app.use('/', rootRoute);
    app.use('/order', orderRoute);
    app.use('/buy_item', buyItemRoute);

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
