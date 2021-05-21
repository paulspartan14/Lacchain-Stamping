const router = require('express').Router()

const { getData, postData, postNewRegistry  } = require('../controllers/strampi')

// endpoint para obtener un hash unico en lacchain
router.post('/encrypt', postData)
// endpoint para encimar datos sobre los ya existentes
router.post('/queue', postNewRegistry)
// endpoint para obtener los datos ya encriptados
router.post('/validate', getData)

module.exports = router