const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require("./config/db")

//routes path 
const authRoutes = require('./routes/authRoutes')

//rest object 
const app = express()

//middlewares 
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))

//mongo connection 
connectDB(); 

//dotenv
dotenv.config()
const PORT = process.env.PORT || 8080
const DEV_MODE = process.env.DEV_MODE

// API routes 
app.use("/api/v1/auth", authRoutes);

//listen server 
app.listen(PORT, ()=>{
    console.log(`Server running in ${DEV_MODE} on ${PORT}`)
});