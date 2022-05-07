/* eslint-disable no-unused-vars */
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')


mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (!err) return console.log('Connected to DB');
    console.log(err);
})

const app = express()

const PORT = process.env.PORT || 3500

app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())

app.use('/auth', require('./Controller/Routes/auth'))

app.use("/api/calendar", require('./Controller/CalendarController'))

app.listen(PORT, () => {
    console.log('listening on ' + PORT);
})