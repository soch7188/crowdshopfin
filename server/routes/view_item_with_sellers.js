'use strict';

const
    express = require('express'),
	config = require('../../config')

let router = express.Router();

function getViewItemWithSellersPage(req, res) {
    return res.render('pages/view_item_with_sellers.ejs', {
        // login_success:false,
        url: config.api_url
    })
}

router.get('/', getViewItemWithSellersPage)

module.exports = router;
