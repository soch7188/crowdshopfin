'use strict';

const
    express = require('express'),
	config = require('../../config')

let router = express.Router();

function getBuyItemPage(req, res) {
    return res.render('pages/buy_item.ejs', {
        // login_success:false,
        url: config.api_url
    })
}

router.get('/', getBuyItemPage)

module.exports = router;
