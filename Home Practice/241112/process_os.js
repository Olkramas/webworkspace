const process = require('process');
const os = require('os');

console.log(process.env.JAVA_HOME);

console.log(os.cpus());
console.log(os.tmpdir());