const path = require('path');
const fs = require('fs');
const arraySize = isNaN(Number(process.argv.slice(2)[0])) ? 7 : Number(process.argv.slice(2)[0]);
let i = 0;
const arr = [];
while (i < 1 * 10 ** arraySize) {
  arr.push(i);
  i++;
}
const result = 'module.exports=' + JSON.stringify(arr);
fs.writeFile(path.join(__dirname, '../', 'data.js'), result, function (err) {
  console.log(err ? 'Error :' + err : `Generated data.js file with ${10 ** arraySize} elements`);
});
