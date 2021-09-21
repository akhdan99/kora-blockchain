/**
 * Token merupakan wadah untuk menyimpan transaksi yang terjadi pada detik yang sama.
 * Semisal pada jam 20:01:25 terjadi 5 transaksi perpindahan aset, maka akan ada 5 token di dalam block 20:01:25
 * @typedef {Object} User
 * @property {String} id - UUID
 * @property {String} pubKeyName - nama dari file public key user
 */

class Token {
    /**
     * 
     * @param {User} from 
     * @param {User} to 
     * @param {number} amount 
     * @param {*} data
     * @author Akhdan Faiz Amanullah <akhdanfaizamanullah@gmail.com>
     */
    constructor(from, to, amount, data = {}){
        this.from = from
        this.to = to
        this.amount = amount
        this.data = data
        this.createdAt = Math.floor(Date.now() / 1000)
    }
}

module.exports = Token