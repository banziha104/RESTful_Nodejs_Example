# 요청처리

- path 파싱 : req.params 를 통해 파싱
- query 파싱 : req.query 를 통해 파싱
- body 파싱 : body-parser 미들웨어를 이용하며, req,body를 통해 파싱


```javascript
const express = require('express')
const router = express.Router()

// 패스파싱
router.get('/:id',(req,res)=>{
  res.send('id / ' + req.params.id)
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

```