const express = require('express')
const Response = require('../lib/response')

const response = new Response()
const router = express.Router()

router.get('/', (req, res) => {
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
})

module.exports = router
