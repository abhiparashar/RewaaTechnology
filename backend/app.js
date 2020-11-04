const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')


const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/auth',authRoute)
app.use('/api/v1/products',productRoute)

const port = process.env.PORT || 6500

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})