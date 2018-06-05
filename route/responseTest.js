const express = require('express')
const router = express.Router()

// json 응답

router.get('/json',(req,res) => {
    res.json({id:30,ps:30})
})

router.get('/jsonString',(req,res) => {
  res.json({id:30,ps:30})
})

router.get('/jsonp',(req,res) => {
    res.jsonp({id:40,ps:50})
})

module.exports = router