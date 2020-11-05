const mysql = require('mysql')
const migration = require('mysql-migrations');

const db = mysql.createConnection({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'password',
    database:'rewaa',
    insecureAuth : true
})

// migration.init(db, __dirname + '/migrations', function() {
//   console.log("finished running migrations");
// });

db.getConnection = function(err,connection){
    if(err){
        console.log('connection not established')
    }
    else{
        connection.release()
    }
}

module.exports = db