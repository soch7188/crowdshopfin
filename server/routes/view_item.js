'use strict';

const
    express = require('express'),
	config = require('../../config')

let router = express.Router();

function getViewItemPage(req, res) {
    return res.render('pages/view_item.ejs', {
        // login_success:false,
        url: config.api_url
    })
}

router.get('/', getViewItemPage)

module.exports = router;
