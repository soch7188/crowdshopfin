/**
 * Server Index
 *
 * @date 2018-06-02
 * @author 김지원
 */

const
	express = require('express')

const
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	morgan = require('morgan');

module.exports = function(){
	let
		server = express(),
		create,
		start;

	create = function(config){
		server.use(cookieParser());

		let routes = require('./routes');
		server.set('env', config.env);
		server.set('port', config.port);
		server.set('viewDir', config.viewDir);
		server.set('view engine', 'ejs');

		server.use(morgan('dev'));
		server.use(bodyParser.json());
	    server.use(bodyParser.urlencoded({ extended: false }));

		server.locals.api_url = config.api_url
		server.use(express.static('public'));
		routes.init(server);
	};

	start = function() {
		let	port = server.get('port');

		process.on('uncaughtException', function (err) {
			console.log('uncaughtException 발생함 : ' + err);
			console.log('서버 프로세스 종료하지 않고 유지함.');
			console.log(err.stack);
		});

		process.on('SIGTERM', function () {
			console.log("프로세스가 종료됩니다.");
			server.close();
		});

		server.on('close', function () {
			console.log("Express 서버 객체가 종료됩니다.");
		});

		server.listen(process.env.PORT || port, function () {
			console.log('Express server listening on - port: ' + port);
		});
	};

	return {
		create: create,
		start: start
	};
};
