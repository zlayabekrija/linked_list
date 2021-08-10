const data = require('../data.js');

function iterativeOOfN(data, lookup) {
  const startTime = new Date().getTime();
  let i = 0;
  let steps = 0;
  while (i < data.length) {
    if (data[i] === lookup) return {steps, found: true, time: new Date().getTime() - startTime};
    i++;
    steps++;
  }
  return {steps, found: false, time: new Date().getTime() - startTime};
}
function iterativeOLogOfN(data, lookup) {
  const startTime = new Date().getTime();
  let start = 0;
  let end = data.length - 1;
  let steps = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (data[mid] === lookup) return {steps, found: true, time: new Date().getTime() - startTime};
    if (data[mid] < lookup) start = mid + 1;
    if (data[mid] > lookup) end = mid - 1;
    steps++;
  }

  return {steps, found: false, time: new Date().getTime() - startTime};
}
console.log(iterativeOOfN(data, -1));
console.log(iterativeOLogOfN(data, -1));
// let i = 0;
// const arr = [];
// while (i < 1e7) {
//   arr.push(i);
//   i++;
// }
// const result = 'module.exports=' + JSON.stringify(arr);
// require('fs').writeFile('data.js', result, function (err) {
//   console.log(err ? 'Error :' + err : 'ok');
// });
