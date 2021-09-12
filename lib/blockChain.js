class BlockChain{
    constructor(){
        this.blocks = []
    }

    getBlocks(){
        return this.blocks
    }

    mine(block){
        let hash
        let nonce = 0
        let pattern = '0'.repeat(block.getDifficulty())
        if(this.blocks.length> 0){
           
            if(this.blocks[this.blocks.length -1].verify() === false) throw Error('Block sebelumnya tidak valid')
            block.setPrevHash(this.blocks[this.blocks.length -1].hash)
        }
        while(true){
            hash = block.createHash(nonce)
            console.log(`mining in progress...\n Nonce:${nonce} \n pattern:${pattern} \n hash: ${hash.charAt(0)}`)
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