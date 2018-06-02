'use strict'

const
  express = require('express'),
  config = require('../../config')

let router = express.Router()

function getRegisterPage (req, res) {
  res.render('pages/register_item.ejs', {
      url: config.api_url
    })
}

// 등록 화면
router.get('/', getRegisterPage)

module.exports = router
