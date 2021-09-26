const CryptoJS = require("crypto-js")

class Block{
    /**
     * 
     * @param {object} data
     * @param {number} difficulty tingkat kesulitan minning (jumlah angka 0)
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    constructor(data,difficulty= 4){
        this.blockNumber
        this.nonce = null
        this.data = data
        this.prevHash= '00000000000000000000000000000'
        this.hash = null
        this.difficulty = difficulty
        this.createdAt = Math.floor(Date.now() / 1000)
    }
    /**
     * 
     * @returns {object} data berupa object
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    getData(){
        if(this.hash !== this.createHash(this.nonce)) throw Error('Hash tidak sesuai')
        return this.data
    }

    /**
     * 
     * @returns {string} hash
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    getHash(){
        if(this.hash === null) throw Error('tidak ada hash')
        return this.hash
    }

    /**
     * 
     * @returns {number} difficulty
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    getDifficulty(){
        return this.difficulty
    }

    /**
     * 
     * @param {string} hash
     * @throws {Error}
     * @returns {this}
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
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
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
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
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
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
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
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
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    createHash(nonce){
        return CryptoJS.SHA256(this.blockNumber+ nonce + JSON.stringify(this.data) + this.prevHash).toString()
    }

    /**
     * 
     * @returns {boolean}
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    verify(){
        if(this.hash === this.createHash(this.nonce))return true
        return false
    }
}

module.exports = Block