const Web3 = require('web3');

const nodeLacchain = 'http://3.141.108.65:4545'

let web3 = new Web3(nodeLacchain);

web3.eth.getBalance('0x26107fd2d10faeb14bc795664152f873d822746f').then(console.log);