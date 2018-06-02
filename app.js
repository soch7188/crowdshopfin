/**
 * App
 *
 * @date 2018-06-02
 * @author Ziwon, Kim
 */


'use strict';

const
	server = require('./server')(),
	config = require('./config');

server.create(config);
server.start();

// Refer to this blog for ejs template engine usage
// https://scotch.io/tutorials/use-ejs-to-template-your-node-application
