const { getCredentials, postCredentials  } = require('../utils/axios')

/**
 * @function getStrampi
 * @description Controller for POST strampi /api/v1/lacchain/validate
 * @param {Object} req
 * @param {Object} res
 */
const getData = async (req, res) => {
  const { trxid } = req.body
  try {
    // peticion get a strampi
    const data = await getCredentials(trxid)
    res.send(data)
  } catch (err) {
    console.error(`there was an error: ${err}`)
  }
}

/**
 * @function postStrampi
 * @description Controller for GET /api/v1/lacchain/encrypt
 * @param {Object} res
 */
const postData = async (req, res) => {
  try {
    // peticion post a strampi
    const data = await postCredentials(req.body)
    res.send(data)
  } catch (err) {
    console.error(`there was an error: ${err}`)
  }
}

module.exports = {
  getData,
  postData,
}
