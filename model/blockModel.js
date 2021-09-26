const {db} = require('../config/db')
const {uid} = require('uid/secure')

const table = 'block'

module.exports = {
    /**
     * @param {*} data data block
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    saveBlock: async (data) =>{
        data.id = uid(32)
        let result =  await db(table).insert(data)
        return result
    }
}