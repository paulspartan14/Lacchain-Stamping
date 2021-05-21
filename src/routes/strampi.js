const router = require('express').Router()

const { getData, postData, postNewRegistry  } = require('../controllers/strampi')
const { trxidValidator, encryptValidator, queueValidator } = require('../middlewares/validators')

// endpoint para obtener un hash unico en lacchain
router.post('/encrypt', encryptValidator, postData)
// endpoint para encimar datos sobre los ya existentes
router.post('/queue', queueValidator, postNewRegistry)
// endpoint para obtener los datos ya encriptados
router.post('/validate', trxidValidator, getData)

module.exports = router