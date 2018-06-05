// 라우터를 불러옮
let express = require('express')
let router = express.Router()

// 라우터 설정
router.get("/",(req,res)=>{
  res.send("route get")
})

router.post("/",(req,res)=>{
  res.send("route post")
})

router.put("/",(req,res)=>{
  res.send("route put")
})

router.delete("/",(req,res)=>{
  res.send("route delete")
})

// 라우터를 모듈로 exports
module.exports = router