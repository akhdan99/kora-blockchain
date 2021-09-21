const express = require('express')
const auth = require('../middleware/auth')
const controller = require('../module/mine/controller')

const router = express.Router()

/**
 * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
 */

router.route('/').post(
  auth.verifyJWT,
  controller.minning
)

module.exports = router