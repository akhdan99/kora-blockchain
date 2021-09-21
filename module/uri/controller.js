const Response = require('../../lib/response')

const response = new Response()

module.exports = {

    /**
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    
    getAllURI: async (req, res, next) => {
    res.json(
            response.create('Data berhasil diambil!','', 
                {
                    'resources':[
                    {
                        'uri':'/',
                        'verbs':['GET']
                    },
                    {
                        'uri':'/blocks',
                        'verbs':['GET']
                    },
                    {
                        'uri':'/block',
                        'verbs':['POST']
                    },
                    {
                        'uri':'/mine',
                        'verbs':['POST']
                    },
                    ]
                }
            )
        )   
    }
}