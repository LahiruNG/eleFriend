var mysql = require('mysql')
var db;
var Settings={


};

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "elefriend",
    //debug: true
});

connection.connect(function(err){
    if(err){
        console.log("error in connection")
    }else{
        console.log("connected")
    }
})

module.exports = connection