const crypto = require('crypto');
// import crypto from 'crypto'

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex')

console.log(hash)