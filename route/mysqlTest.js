const express = require('express')
const router = express.Router()
const conn = require('../model/mysqlModel')

router.get('/', (req, res) => {
  conn.findAll().then((log) => console.log(log))
  res.send("DB에서 불러오기")
})

router.post('/', (req, res) => {
  conn.create({user_num : 30, user_name : "LeeYoungJoon"})
  res.send('DB에 넣기')
})

module.exports = router