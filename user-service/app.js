const express = require("express")
const app = express();
const connectDB = require('./db/connect.js')
const authService = require('./routes/authService.js')
app.use(express.json());
require('dotenv').config()

app.use('/users', authService)

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(3001, console.log('Server is listening on port 3001...'))
    } catch (error) {
      console.log(error)
    }
}

start()
