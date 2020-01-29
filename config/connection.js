var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "k2fqe1if4c7uowsh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "qpp2m3473hgtxx3w",
    password: "qcsw22kf4nxlt19y",
    database: "sixmz6l1zatws8n8"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;