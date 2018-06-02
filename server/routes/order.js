'use strict';

const
    express = require('express'),
	config = require('../../config')

let router = express.Router();

function getOrderPage(req, res) {
    return res.render('pages/order.ejs', {
        // login_success:false,
        url: config.api_url
    })
}

// 홈 화면
router.get('/', getOrderPage)

module.exports = router;
