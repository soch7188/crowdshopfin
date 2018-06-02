'use strict';

const
    express = require('express'),
	config = require('../../config')

let router = express.Router();

function getProceedPaymentPage(req, res) {
    return res.render('pages/proceed_payment.ejs', {
        // login_success:false,
        url: config.api_url
    })
}

router.get('/', getProceedPaymentPage)

module.exports = router;
