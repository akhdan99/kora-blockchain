const express = require('express')
const auth = require('../middleware/auth')
const {setChain} = require('../middleware/constructor/index')
const controller = require('../module/blocks/controller')

const router = express.Router()

/**
 * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
 */

router.route('/').get(
  auth.verifyJWT,
  setChain,
  controller.getAllBlocks
)

module.exports = router