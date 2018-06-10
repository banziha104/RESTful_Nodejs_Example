let mongoose = require('mongoose')
let Schema = mongoose.Schema

let DataSchema = new Schema({
  title : String,
  description : String,
  author : String,
  price : Number
})

module.exports = mongoose.model("data",DataSchema)