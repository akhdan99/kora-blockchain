const Response = require('../../../lib/response')
const {sign} = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')

const response = new Response()

module.exports = {

    /**
     * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
     */
    
    oauthGoogle: async (req, res, next)=>{
        const jwt= sign({},fs.readFileSync(path.join(__dirname,'..','..','..','jwt.private')),{
            algorithm:'RS256',
            expiresIn: '12h',
            audience: 'akhdan'
        })
        res.json(response.create('Login Berhasil!','',{'jwt':jwt}))
    }
}