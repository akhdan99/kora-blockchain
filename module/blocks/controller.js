const Response = require('../../lib/response')
const response = new Response()

module.exports = {
  
    /**
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    
    getAllBlocks: async (req, res, next)=>{
        let blocks =  req.app.locals.chain.getBlocks()
        
        res.json(
            response.create('semua block berhasil diambil!','',{'blocksLength':blocks.length,'blocks':blocks})
        )
    }
}