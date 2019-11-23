var fs = require('fs');

var setFilterFile = './enterprise-modules/grid-set-filter/package.json';

function readJson(fileName) {
  var data = fs.readFileSync(fileName);
  return JSON.parse(data);
}

var setFilter = readJson(setFilterFile);

if (setFilter.version.indexOf("plus") < 0)
{
  setFilter.version = setFilter.version + '-plus';
}

fs.writeFile(setFilterFile, JSON.stringify(setFilter, null, 2), function (err) {
  if (err) return console.log(err);
  console.log('writing to ' + setFilterFile);
});
