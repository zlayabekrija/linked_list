const path = require('path');

let i = 0;
const arr = [];
while (i < 1e7) {
  arr.push(i);
  i++;
}
const result = 'module.exports=' + JSON.stringify(arr);
require('fs').writeFile(path.join(__dirname, '../', 'data.js'), result, function (err) {
  console.log(err ? 'Error :' + err : 'ok');
});
