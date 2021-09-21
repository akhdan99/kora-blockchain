const path = require('path');
const fs = require("fs");
const { verify } = require("jsonwebtoken");

module.exports={

   /**
    * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
    */
   verifyJWT: (req, res, next)=>{
      let token = req.headers['x-access-token']
      const payload = verify(token, fs.readFileSync(path.join(__dirname,'..','..','jwt.public')),{ algorithms: ['RS256'] })
      req.body.userId = payload.aud
      next()
   }
}