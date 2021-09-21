/**
 * @author Akhdan Faiz A <akhdanfaizamanullah@gmail.com>
 */

const express = require('express')
const app = express()
const BlockChain = require('./lib/blockChain')

app.locals.chain = new BlockChain()
app.locals.queue = []

app.use(express.json());
require('dotenv').config();

// Import Router
const mineRoute = require('./routes/mine')
const uriRoute = require('./routes/uri')
const blockRoute = require('./routes/block')
const blocksRoute = require('./routes/blocks')
const oauthRoute = require('./routes/oauth')

// Routing
app.use('/', uriRoute)
app.use('/oauth', oauthRoute)
app.use('/blocks', blocksRoute)
app.use('/block',blockRoute)
app.use('/mine',mineRoute)

module.exports = app