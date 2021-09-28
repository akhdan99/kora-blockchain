const {db} = require('../config/db')

const table = 'block'

module.exports = {
    /**
     * @param {*} data data block
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    saveBlock: async (data) =>{
        let result =  await db(table).insert(data)
        return result
    },
    getAllBlock:  async ()=>{ 
        let results =  await db(table).select().orderBy('blockNumber', 'asc')
        results.forEach(element => {
            element.data = JSON.parse(element.data)
        });
        return results
    }
}