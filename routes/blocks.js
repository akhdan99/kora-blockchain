const express = require('express')
const Response = require('../lib/response')

const response = new Response()
const router = express.Router()

router.get('/', (req, res)=>{
  let blocks =  req.app.locals.chain.getBlocks()
  
  res.json(
    response.create('semua block berhasil diambil!','',{'blocksLength':blocks.length,'blocks':blocks})
  )
})

module.exports = router