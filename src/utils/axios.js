const axios = require('axios')
const sha256 = require('crypto-js/sha256');

/**
 * @function generateHash
 * @description generador de hash sha256 - evidence
 * @param {Object} req
 * @param {Object} res
 */
 const generateHash = (data) => {
    const hash = sha256(data)
    return hash.toString()
}

/**
 * @function postStrampi
 * @description Controller for POST strampi /api/v1/lacchain/validate
 * @param {Object} req
 * @param {Object} res
 */
const getCredentials = async (trxid) => {
    const result = await axios.get('http://api.stamping.io/getstamp/?byTrxid='+trxid)
    const { data } = result
    return data.result.data
}

const { USER_STAMPI, PASS_STAMPI, URL  } = process.env

const postCredentials = async (req) => {
    // parametro subject para identidades o credenciales
    const subject = 'unique identity'
    // generando el sha256 que usa evidence
    const evidence = generateHash(JSON.stringify(req))
    // parametro para saber si esperas o no la transacción
    const isAsync = false
    // formateando la data para pasarsela a axios
    const urltest = 'http://api.stamping.io/stamp/?evidence='+evidence+
                    '&data='+JSON.stringify(req)+
                    '&transactionType='+URL+
                    '&async='+isAsync+
                    '&subject='+subject
    //send data with axios
    const result = await axios.post(urltest, {}, {
        auth: {
            'username': USER_STAMPI,
            'password': PASS_STAMPI
        }
    })
    return result.data
}

module.exports = { getCredentials, postCredentials }