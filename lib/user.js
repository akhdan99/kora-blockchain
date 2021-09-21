/**
 * 
 */

class User{
    /**
     * @param {String} id UUID dari user
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    constructor(id){
        this.id = id
    }

    /**
     * @returns {String} UUID
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    getId(){
        return this.id
    }
}

module.exports = User