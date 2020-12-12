if (process.env.NODE_ENV === 'dev') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const router = require('./routes')
const cors = require('cors')
const errorhandler = require('./middlewares/errorhandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
app.use(errorhandler)

module.exports = app