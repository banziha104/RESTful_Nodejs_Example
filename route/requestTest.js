const express = require('express')
const router = express.Router()

// 패스파싱
router.get('/:id',(req,res)=>{
  res.send('user' + req.params.id)
})

// 쿼리파싱
router.get('/',(req,res) => {
  let q = req.query.q
  let id = req.query.id
  res.send(`Query, q : ${q} , id : ${id}`)
})

// 바디파싱
router.post('/', (req,res) => {
  console.log(req.body)
  res.json(req.body)
})

module.exports = router
