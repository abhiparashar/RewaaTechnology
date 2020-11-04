const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(cors())

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

app.post('/api/v1/auth/signup',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    db.query("INSERT INTO users(username,password,email) VALUES(?,?,?)",[username,password,email],(err,result)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(result)
        }
    })
})

app.post('/api/v1/auth/signin',(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    db.query("SELECT * FROM users WHERE email=? AND password=? ",[email,password],(err,result)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(result)
        }
    })
})

app.get('/api/v1/products',(req,res)=>[
    db.query("SELECT * FROM products",(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
])

app.get('/api/v1/products/:id',(req,res)=>{
     db.query("SELECT * FROM products WHERE id=?",[req.params.id],(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log(result)
            res.send(result)
        }
    })
})

app.post('/api/v1/products/createproduct',(req,res)=>{
    const name = req.body.name
    const price = req.body.price
    const quantity = req.body.quantity
    const description = req.body.description
     db.query("INSERT INTO products(name,price,quantity,description) VALUES(?,?,?,?)",[name,price,quantity,description],(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})

app.delete('/api/v1/products/:id',(req,res)=>{
    console.log(req.params.id)
     db.query("DELETE FROM products WHERE id=?",[req.params.id],(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})

app.put('/api/v1/products/:id',(req,res)=>{
    const name = req.body.name
    const price = req.body.price
    const quantity = req.body.quantity
    const description = req.body.description
    console.log('data');
     db.query(`UPDATE products
            SET name = ?, price=?, quantity=?, description=?
            WHERE id = ?`,[name,price,quantity,description,req.params.id],(err,result)=>{
                console.log(err,result)
    if (err){
        res.send(err)
    }
    else{
        console.log('abhishek',result)
        res.send(result)
    }
    })
})


const port = process.env.PORT || 6500

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})