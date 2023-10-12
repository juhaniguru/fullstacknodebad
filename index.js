const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRouter = require('./routers/auth')


mongoose.connect('mongodb://127.0.0.1:27017/fullstackexample');


app.use(bodyParser.json())


app.use('/api/v1/auth', authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})