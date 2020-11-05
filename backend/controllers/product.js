const express = require('express')
const db = require('../config/db')

exports.getProducts = (req,res)=>{
    db.query("SELECT * FROM products",(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
}

exports.getProduct = (req,res)=>{
    db.query("SELECT * FROM products WHERE id=?",[req.params.id],(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
}

exports.createProduct = (req,res)=>{
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
}

exports.deleteProduct = (req,res)=>{
     db.query("DELETE FROM products WHERE id=?",[req.params.id],(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
}

exports.updateProduct = (req,res)=>{
    const name = req.body.name
    const price = req.body.price
    const quantity = req.body.quantity
    const description = req.body.description
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
}

