const mysql = require('mysql')
const sequelize  = require('sequelize')

// const db = mysql.createConnection({
//     connectionLimit:10,
//     host:'localhost',
//     user:'root',
//     password:'password',
//     database:'rewaa',
//     insecureAuth : true
// })

// db.getConnection = function(err,connection){
//     if(err){
//         console.log('connection not established')
//     }
//     else{
//         connection.release()
//     }
// }


const db = new sequelize(
    'rewaa',
    'root',
    'password',
    {
        dialect:'mysql',
        host:'localhost'
    }
)

module.exports = db