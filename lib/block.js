const CryptoJS = require("crypto-js")

class Block{
    constructor(blockNumber,data,difficulty= 4){
        this.blockNumber = blockNumber
        this.nonce = null
        this.data = data
        this.prevHash= '00000000000000000000000000000'
        this.hash = null
        this.difficulty = difficulty
    }

    getData(){
        if(this.hash !== this.createHash(this.nonce)) throw Error('Hash tidak sesuai')
        return this.data
    }
    getHash(){
        if(this.hash === null) throw Error('tidak ada hash')
        return this.hash
    }
    getDifficulty(){
        return this.difficulty
    }

    setHash(hash){
        if(this.hash !== null) throw Error('Hash sudah diisi')

        if(hash.substr(0, this.getDifficulty()) !== '0'.repeat(this.getDifficulty())) throw Error('Hash tidak sesuai dengan ketentuan')
        this.hash =hash
        return this
    }

    setNonce(nonce){
        if(this.nonce !== null) throw Error('nonce sudah diisi')
        this.nonce = nonce
        return this
    }

    setPrevHash(hash){
        if(hash === '00000000000000000000000000000') return this
        this.prevHash = hash
        return this
    }

    createHash(nonce){
        return CryptoJS.SHA256(this.blockNumber+ nonce + JSON.stringify(this.data) + this.prevHash).toString()
    }

    verify(){
        if(this.hash === this.createHash(this.nonce))return true
        return false
    }
}

module.exports = Block