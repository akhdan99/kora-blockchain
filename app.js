const express = require('express')
const app = express()
const Block = require('./lib/block')
const BlockChain = require('./lib/blockChain')
const Response = require('./lib/response')

const response = new Response()
const queue = []
const chain = new BlockChain()

app.use(express.json());
require('dotenv').config();

app.get('/', (req, res) => {
  res.json({
    'resources':[
      {
        'uri':'/',
        'verbs':['GET']
      },
      {
        'uri':'/blocks',
        'verbs':['GET','POST']
      },
    ]
  })
})

app.get('/blocks', (req, res)=>{
  let blocks = chain.getBlocks()
  
  res.json(
    response.create('semua block berhasil diambil!','',{'blocks':blocks})
  )
})

app.post('/block',(req, res)=>{
  let data =  {
    "to":req.body.to,
    "from":"dummy sender",
    "amount": req.body.amount,
    "stockId":req.body.stockId
  }
  queue.push(new Block(chain.getBlocks().length, data,process.env.DIFFICULTY))
  res.json(response.create('Block Berhasil ditambahkan ke Queue!','',data))
})

app.post('/mine',(req, res)=>{
  if(!queue.length) res.json(response.create('Tidak ada block!','Silakan tambahkan block di {POST} /block'))
  queue.forEach(block => {
    chain.mine(block)
  });
  res.json(response.create('Semua Block Berhasil di Mine!','',{"blocks":chain.getBlocks()}))
})

module.exports = app