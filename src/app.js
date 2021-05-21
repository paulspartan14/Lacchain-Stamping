const express = require('express')
const app = express()
const cors = require('cors')

const api = require('./routes')
const { handleErrors } = require('./middlewares/handleErrors')

// Middlewares
app.use(express.json())

// Cors options
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// Routes
app.use('/api/v1', api)
app.use(handleErrors)

module.exports = app