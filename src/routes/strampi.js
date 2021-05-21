const router = require('express').Router()

const { getData, postData } = require('../controllers/strampi')

// endpoint para obtener los datos ya encriptados
router.post('/validate', getData)
// endpoint para obtener un hash unico en lacchain
router.post('/encrypt', postData)

module.exports = router