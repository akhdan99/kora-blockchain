const express = require('express')
const auth = require('../middleware/auth')
const {setChain} = require('../middleware/constructor/index')
const controller = require('../module/block/controller')

const router = express.Router()

/**
 * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
 */

router.route('/').post(
  auth.verifyJWT,
  setChain,
  controller.addBlock
)

module.exports = router