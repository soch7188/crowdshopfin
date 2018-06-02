'use strict';

const
    express = require('express'),
	config = require('../../config')

let router = express.Router();

function getTradeItemPage(req, res) {
    return res.render('pages/trade_item.ejs', {
        // login_success:false,
        url: config.api_url
    })
}

router.get('/', getTradeItemPage)

module.exports = router;
