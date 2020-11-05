const db = require('../config/db')
const jwt = require('jsonwebtoken')
const saltRounds = 10
const { hash } = require('bcrypt')
const bcypt = require('bcrypt')
const mysql = require('mysql')
const expressJwt = require('express-jwt')


exports.Signup = (req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    const token = jwt.sign({ username, email, password }, process.env.ACCOUNT_ACTIVATION_JWT, { expiresIn: '12h' });
    const options = {
            expires:new Date(Date.now()+process.env.JWT_EXPIRE_COOKIE * 24 * 60 * 60 * 1000),httpOnly: true,
        }
    bcypt.hash(password,saltRounds,(err,hash)=>{
        if(err){
            res.send(err)
        }
        else{
            db.query("INSERT INTO users(username,password,email) VALUES(?,?,?)",[username,hash,email],(err,result)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).cookie('token',token,options).send({result,token})
        }
    })
        }
    })
}

exports.Signin =  (req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const token = jwt.sign({email, password }, process.env.ACCOUNT_ACTIVATION_JWT, { expiresIn: '12h' });
    let  matchPassword  =false
        db.query("SELECT * FROM users WHERE email=?",[email],(err,user)=>{
            if(err){
                res.status(500).send(err)
            }
            if(user){
            matchPassword= bcypt.compare(password,user[0].password)
                    .then((data) =>      
                    {
                    if(data){
                            res.status(200).send({token,user:user})
                    }else{
                            return res.send("Invalid credentials")
                    }})
                    .catch(() => console.log('something went wrong!'))
                    console.log(matchPassword)
            }
    })
     
}

exports.Signout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.json({ message: 'Signout successfully.' });
    } catch (error) {
        return res.json({ error });
    }
};

exports.requireSignin = expressJwt({ secret: process.env.ACCOUNT_ACTIVATION_JWT, algorithms: ['HS256'] });







