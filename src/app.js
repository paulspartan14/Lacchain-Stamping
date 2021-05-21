const express = require('express')
const app = express()

const api = require('./routes')
const { handleErrors } = require('./middlewares/handleErrors')

// Middlewares
app.use(express.json())

// Routes
app.use('/api/v1', api)
app.use(handleErrors)

module.exports = app