# MongoDB

- Connection 연결

```javascript
// db연동
const db =  mongoose.connection
db.on('error',console.error)
db.once('open', () => {
  console.log("mongodb connect")
})

let connect = mongoose.connect('mongodb://127.0.0.1:27017/nodeTest',{useMongoClient : true})
autoIncrement.initialize(connect)
```

- Schema 정의

```javascript
let mongoose = require('mongoose')
let Schema = mongoose.Schema

let DataSchema = new Schema({
  title : String,
  description : String,
  author : String,
  price : Number
})

module.exports = mongoose.model("data",DataSchema)
```

- CRUD

```javascript
const express = require('express')
const router = express.Router()
const DataModel = require('../model/mongoModel')

router.get("/", (req, res) => {
  const temp = new DataModel({
    title: "sleepy..",
    description: "go to the bed",
    author: "leeyoungjoon",
    price: 15000
  })
  temp.save((error, data) => {
    if (error) {
      console.log(error)
      res.send("fail")
    } else {
      console.log(data + 'Saved')
      res.send("success")
    }
  })
})

router.post('/',(req,res) => {
  DataModel.find((error, data) => {
    console.log(data)
    if (error) {
      console.log("error")
      res.send("failed")
    }else{
      res.send("success")
    }
  })
})

module.exports = router
```