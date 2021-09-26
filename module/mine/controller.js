const Response = require('../../lib/response')
const model = require('../../model/blockModel')
const response = new Response()

module.exports = {

    /**
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    
    minning: async (req, res, next)=>{
        if(! req.app.locals.queue.length) res.json(response.create('Tidak ada block!','Silakan tambahkan block di {POST} /block'))
        req.app.locals.queue.forEach(block => {
            req.app.locals.chain.mine(block)
            model.saveBlock(
                {
                    blockNumber: block.blockNumber,
                    nonce: block.nonce,
                    data: JSON.stringify(block.data),
                    hash:block.hash,
                    prevHash: block.prevHash,
                    difficulty: block.difficulty,
                    createdAt: block.createdAt
                }
            )
        });
        req.app.locals.queue = []
        const blocks = req.app.locals.chain.getBlocks()
        res.json(response.create('Minning Berhasil!','',{"blocksLength":blocks.length,"blocks":blocks}))
    }
}