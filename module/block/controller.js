const Block = require('../../lib/block')
const Token = require('../../lib/token')
const User = require('../../lib/user')
const Response = require('../../lib/response')

const response = new Response()

module.exports = {
  
  /**
   * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
   */

  addBlock:(req, res, next)=>{
    const from = new User(req.body.userId)
    const to = new User(req.body.to)
    let data = new Token(from,to,req.body.amount,{"stockId":req.body.stockId})
    req.app.locals.queue.push(new Block(data,Number(process.env.DIFFICULTY)))
    res.json(response.create('Block Berhasil ditambahkan ke Queue!','',data))
  }
}