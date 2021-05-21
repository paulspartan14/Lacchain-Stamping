/**
 * @function bodyValidator 
 * @description Middleware para validar el trxid en el body
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const trxidValidator = (req, res, next) => {
  // si el body esta vacio
  if (Object.keys(req.body).length != 1){
    res.status(400).send({
      status: 400,
      msj: 'solo ingresa el parametro trxid',
    })
  }  
  // si no existe la propiedad 'trxid'
  else if (req.body.hasOwnProperty('trxid') === false) {
    res.status(400).send({
      status: 400,
      msj: 'no existe el campo trxid, porfavor ingresalo',
    })  
  }
  next()
}

const encryptValidator = (req, res, next) => {
  // si el body esta vacio
  if (Object.keys(req.body).length === 0){
    res.status(400).send({
      status: 400,
      msj: 'Ingresa los parametros a encriptar',
    })
  }  
  next()
}

const queueValidator = (req, res, next) => {
  // si el body esta vacio
  if (Object.keys(req.body).length === 0){
    res.status(400).send({
      status: 400,
      msj: 'necesitas el parametro trxid y la nueva información',
    })
  }  
  // si no existe la propiedad 'trxid'
  else if (req.body.hasOwnProperty('trxid') === false) {
    res.status(400).send({
      status: 400,
      msj: 'no existe el campo trxid, porfavor ingresalo',
    })  
  }
  next()
}

module.exports = { trxidValidator, encryptValidator, queueValidator }