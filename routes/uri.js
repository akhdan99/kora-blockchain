const express = require('express')
const controller = require('../module/uri/controller')

const router = express.Router()

/**
 * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
 */

router.route('/').get(
    controller.getAllURI
)

module.exports = router
