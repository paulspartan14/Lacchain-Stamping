const router = require('express').Router()
const routerStrampi = require('./strampi')
//Swagger documentation
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')

// swagger
router.use('/docs', swaggerUi.serve)
router.get('/docs', swaggerUi.setup(swaggerDocument))

// routes app
router.get('/', (req, res) => {
  res.send({ message: 'Welcome Home!' })
})

router.use('/lacchain', routerStrampi)

module.exports = router