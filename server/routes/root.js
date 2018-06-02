'use strict';

const
	express = require('express'),
	config = require('../../config');

let router = express.Router();

function getHomePage(req, res) {
    res.render('pages/home.ejs', {
        url: config.api_url
    });
}

// 홈 화면
router.get('/', getHomePage);

module.exports = router;
