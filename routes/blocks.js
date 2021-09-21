const express = require('express')
const auth = require('../middleware/auth')
const controller = require('../module/blocks/controller')

const router = express.Router()

/**
 * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
 */

router.route('/').get(
  auth.verifyJWT,
  controller.getAllBlocks
)

module.exports = router