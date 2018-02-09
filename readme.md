# csv-log

## Installation
```
npm install csv-log
```

## Usage Example - Write to a log file
```
//If the file doesn't exist, it will be created with the column header

//If the file already exists, append to it

var csvLog = require('csv-log')

csvLog.csvLog('log.csv', {field1:'value1', field2:'value2'})

```
## Usage Example - Object to CSV
```
var csvLog = require('csv-log')

csvstring = csvLog.toCsv({field1:'value1', field2:'value2'})

```
## Usage Example - CSV to Object
```
var csvLog = require('csv-log')

console.log(csvLog.toObj(csvdata))

```
