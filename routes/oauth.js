const express = require('express')
const controller = require('../module/oauth/google/controller')

const router = express.Router()

/**
 * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
 */

router.route('/google').post(
    controller.oauthGoogle
)

module.exports = router