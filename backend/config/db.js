const mysql = require('mysql')
const db = mysql.createConnection({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'password',
    database:'rewaa',
    insecureAuth : true
})

db.getConnection = function(err,connection){
    if(err){
        console.log('connection not established')
    }
    else{
        connection.release()
    }
}

module.exports = db