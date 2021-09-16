const CryptoJS = require("crypto-js")

class Block{
    /**
     * 
     * @param {object} data
     * @param {number} difficulty tingkat kesulitan minning (jumlah angka 0)
     */
    constructor(data,difficulty= 4){
        this.blockNumber
        this.nonce = null
        this.data = data
        this.prevHash= '00000000000000000000000000000'
        this.hash = null
        this.difficulty = difficulty
    }
    /**
     * 
     * @returns {object} data berupa object
     */
    getData(){
        if(this.hash !== this.createHash(this.nonce)) throw Error('Hash tidak sesuai')
        return this.data
    }

    /**
     * 
     * @returns {string} hash
     */
    getHash(){
        if(this.hash === null) throw Error('tidak ada hash')
        return this.hash
    }
    /**
     * 
     * @returns {number} difficulty
     */
    getDifficulty(){
        return this.difficulty
    }

    /**
     * 
     * @param {string} hash
     * @throws {Error}
     * @returns {this}
     */
    setHash(hash){
        if(this.hash !== null) throw Error('Hash sudah diisi')

        if(hash.substr(0, this.getDifficulty()) !== '0'.repeat(this.getDifficulty())) throw Error('Hash tidak sesuai dengan ketentuan')
        this.hash =hash
        return this
    }

    /**
     * 
     * @param {number} nonce 
     * @returns {this}
     */
    setNonce(nonce){
        if(this.nonce !== null) throw Error('nonce sudah diisi')
        this.nonce = nonce
        return this
    }

    /**
     * 
     * @param {string} hash
     * @returns {this}
     */
    setPrevHash(hash){
        if(hash === '00000000000000000000000000000') return this
        this.prevHash = hash
        return this
    }

    /**
     * 
     * @param {number} number Nomor urut Block di dalam blockchain
     * @throws {SyntaxError} nomor harus berupa number
     */
    setBlockNumber(number){
        if(typeof number !== 'number') throw SyntaxError('harus berupa angka')
        this.blockNumber = number
        return this
    }

    /**
     * 
     * @param {number} nonce 
     * @returns {string}
     */
    createHash(nonce){
        return CryptoJS.SHA256(this.blockNumber+ nonce + JSON.stringify(this.data) + this.prevHash).toString()
    }

    /**
     * 
     * @returns {boolean}
     */
    verify(){
        if(this.hash === this.createHash(this.nonce))return true
        return false
    }
}

module.exports = Block