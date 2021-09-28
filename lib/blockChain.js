const Block = require("./block")

class BlockChain{
    /**
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    constructor(){
        this.blocks = []
    }

    /**
     * 
     * @returns {array}
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    getBlocks(){
        this.blocks.forEach((block)=>{
            if(!block.verify) throw Error('BlockChain tidak valid')
        })
        return this.blocks
    }

    /**
     * @param {any[]} blocks
     * @returns {this}
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */

    setChain(blocks){
        blocks.forEach(element => {
            let block = new Block(element.data,element.difficulty)
            block.setBlockNumber(element.blockNumber)
            block.setPrevHash(element.prevHash)
            block.setId(element.id)
            block.setNonce(element.nonce)
            block.setHash(element.hash)
            block.setCreatedAt(element.createdAt)
            this.blocks.push(block)
        });
        return this

    }

    /**
     * 
     * @param {Block} block 
     * @returns {this}
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    mine(block){
        let hash
        let nonce = 0
        let pattern = '0'.repeat(block.getDifficulty())
        if(this.blocks.length> 0){
           this.blocks.forEach((block)=>{
                if(!block.verify) throw Error('BlockChain tidak valid')
            })
            block.setPrevHash(this.blocks[this.blocks.length -1].hash)
        }
        (this.blocks.length)?block.setBlockNumber(this.blocks.length):block.setBlockNumber(0)
        while(true){
            hash = block.createHash(nonce)
            console.log(`mining in progress...\n Nonce:${nonce} \n pattern:${pattern} \n hash: ${hash}`)
            if(hash.substr(0, block.getDifficulty()) === pattern){
                block.setHash(hash).setNonce(nonce)
                break
            }
            nonce++
        }
        this.blocks.push(block)
        return this
    }
}

module.exports = BlockChain