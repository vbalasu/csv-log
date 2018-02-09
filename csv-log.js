
module.exports.toCsv = function (obj, header) {
  /* USAGE: csvstring = toCsv({field1:'value1', field2:'value2'}) */
  var json2csv = require('json2csv')
  var csv = json2csv({data:obj, fields:Object.keys(obj), hasCSVColumnTitle:header})
  return csv
}

module.exports.toObj = function (csvdata) {
  /* USAGE: console.log(csvstring) */
  const csvjson = require('csvjson')
  return csvjson.toObject(csvdata)
}

module.exports.csvLog = function (filename, obj) {
  /* USAGE: csvLog('log.csv', {field1:'value1', field2:'value2'}) */
  var fs = require('fs')
  if(fs.existsSync(filename)) fs.appendFileSync(filename, '\n' + this.toCsv(obj, false));
  else fs.writeFileSync(filename, this.toCsv(obj, true))
}

