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