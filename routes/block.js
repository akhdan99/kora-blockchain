const express = require('express')
const auth = require('../middleware/auth')
const controller = require('../module/block/controller')
const router = express.Router()

router.route('/').post(
  auth.verifyJWT,
  controller.addBlock
)

module.exports = router