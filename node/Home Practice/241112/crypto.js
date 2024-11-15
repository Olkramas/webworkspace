const crypto = require('crypto');
const data = 'pw1234';

let encData = crypto.createHash('sha256')
                    .update(data)
                    .digest('hex');
console.log(encData);