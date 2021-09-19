const express = require('express')
const Response = require('../lib/response')

const response = new Response()
const router = express.Router()


router.post('/',(req, res)=>{
  if(! req.app.locals.queue.length) res.json(response.create('Tidak ada block!','Silakan tambahkan block di {POST} /block'))
  req.app.locals.queue.forEach(block => {
    req.app.locals.chain.mine(block)
  });
  req.app.locals.queue = []
  const blocks = req.app.locals.chain.getBlocks()
  res.json(response.create('Minning Berhasil!','',{"blocksLength":blocks.length,"blocks":blocks}))
})

module.exports = router