const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  let connection =  mysql.createConnection({
        host: "localhost",
        port: 3306,
        database: "burger_db",
        user: "root",
        password: "TitoBurrito1!"
    });
}


module.exports = connection;