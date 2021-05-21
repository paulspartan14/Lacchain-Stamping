const router = require('express').Router()
const routerStrampi = require('./strampi')

router.get('/', (req, res) => {
  res.send({ message: 'Welcome Home!' })
})

router.use('/lacchain', routerStrampi)

module.exports = router