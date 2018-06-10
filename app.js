const express = require('express')
const app = express()

const mongoose = require('mongoose')

const path = require('path')

// 미들웨어 불러오기
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// db연동
const db =  mongoose.connection
db.on('error',console.error)
db.once('open', () => {
  console.log("mongodb connect")
})


mongoose.connect('mongodb://127.0.0.1:27017/nodeTest',{useMongoClient : true})
// 라우터 불러오기
const routeTest = require('./route/routeTest')
const requestTest = require('./route/requestTest')
const responseTest = require('./route/responseTest')
const mongoTest = require('./route/mongodbTest')
const mysqlTest = require('./route/mysqlTest')


// 미들웨어 세팅
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(cookieParser())


//라우터 세팅
app.use('/route',routeTest)
app.use('/request',requestTest)
app.use('/response',responseTest)
app.use('/mongoTest',mongoTest)
app.use('/mysqlTest',mysqlTest)
app.get('/',(req,res) => res.send('Hello World'))

app.listen(3000, ()=> console.log('nodejs Running'))