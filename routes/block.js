const express = require('express')
const Response = require('../lib/response')
const Block = require('../lib/block')

const response = new Response()
const router = express.Router()

router.post('/',(req, res)=>{
  let data =  {
    "to":req.body.to,
    "from":"dummy sender",
    "amount": req.body.amount,
    "stockId":req.body.stockId
  }
  req.app.locals.queue.push(new Block(data,Number(process.env.DIFFICULTY)))
  res.json(response.create('Block Berhasil ditambahkan ke Queue!','',data))
})

module.exports = router