var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'mysql.edlio.dev',
  user: 'root',
  password: '',
  database: 'edunet'
})

// IDEA: Use this awesome shit https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_Generators
exports.getDBSchema = function(credentials, callback) {

  var connection = mysql.createConnection(credentials)

  connection.query('SHOW TABLES', (err, tables, fields) => {
    if (err) callback(err, null)
    var tablesData = {}
    tables.map((table) => {
      var tableName = table.Tables_in_edunet
      if (tableName && tableName != "domain") {
        tablesData[tableName] = {}
      }
    })

    Object.keys(tablesData).map((tableName, index) => {
      connection.query('SHOW COLUMNS FROM edunet.' + tableName, (err, columns, fields) => {
        if (err) callback(err, null)
        tablesData[tableName] = columns
      })
    })

    // TODO: Remove this ugly shit
    setTimeout(() => {
      callback(null, tablesData)
    }, 3000)

    connection.end()
  })
}

