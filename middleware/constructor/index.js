const {getAllBlock} = require('../../model/blockModel')

module.exports = {
  
    /**
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    
    setChain: async (req, res, next)=>{
        if(req.app.locals.chain.getBlocks().length == 0){
            req.app.locals.chain.setChain(await getAllBlock())
        }
        next()
    }
}