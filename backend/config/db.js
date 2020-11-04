const util = require('util')
const mysql = require('mysql')
const { error } = require('console')
const { connect } = require('http2')

const pool = mysql.createConnection({
    connectionLimit:10,
    host:'localhost',
    user:'admin',
    password:'admin',
    database:'rewaa'
})

// pool.getConnection((err,connection)=>{
//     if(err){
//         console.log('connection not established')
//     }
//     else{
//         connection.release()
//     }
// })

pool.query = util.promisify(pool.query)

// module.exports = pool