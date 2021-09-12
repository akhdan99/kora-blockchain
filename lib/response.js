class Response{
    /**
     * Digunakan untuk membuat response agar seragam
     * @param {number | string | object} data - Data yang ingin dikembalikan ke user (object: key value pair)
     * @param {string} message - Pesan yang akan ditampilkan ke user akhir
     * @param {string} messageVerbose - Pesan yang akan ditampilkan untuk debugging
     * @return {object} key value pair
     */
    constructor(data={}, message="", messageVerbose=''){
        switch(typeof data){
            case "object":
                break
            case "string":
                break
            case "number":
                break
            default:
                throw TypeError('data harus berupa object(key, value), string atau number')
        }

        if (typeof message !== 'string') {
            throw TypeError('messsage harus berupa string')
        }

        if (typeof messageVerbose !== 'string') {
            throw TypeError('messsage harus berupa string')
        }

        this.data = data
        this.message = message
        this.messageVerbose = messageVerbose
    }

    /**
     Membuat Response
     * @param {number | string | object} data - Data yang ingin dikembalikan ke user (object: key value pair)
     * @param {string} message - Pesan yang akan ditampilkan ke user akhir
     * @param {string} messageVerbose - Pesan yang akan ditampilkan untuk debugging (pesan error)
     * @return {object} key value pair
     * @example {"data":{},"message":"Pesan untuk user disini","messageVerbose":"Pesan Error atau pesan untuk developer disini"}
     */
    create(data={}, message="", messageVerbose=''){
        let template = {}
        template.data = (JSON.stringify(data) === '{}' && (JSON.stringify(data) === '{}'))? this.data: data
        template.message = message
        template.messageVerbose = messageVerbose
        return template
    }
}

module.exports = Response
