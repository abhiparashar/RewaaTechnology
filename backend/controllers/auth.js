const pool = require('../config/db')

exports.Signup = (req,res)=>{
    const username = req.body.username
    const password = req.body.password
    pool.query("INSERT INTO users(username,password) VALUES(?,?)",[username,password],(err,result)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(result)
        }
    })
}

exports.Signin = (req,res)=>{
    // const username = req.body.username
    // const password = req.body.password
    // pool.query("INSERT INTO users(username,password) VALUES(?,?)",[username,password],(err,result)=>{
    //     if(err){
    //         console.log("something went wrong")
    //     }else{
    //         res.status(200).send(result)
    //     }
    // })
}

