let mongoose = require('mongoose')

let PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  age: {
    type: Number,
    
  },
  FavFood: [String],

})

module.exports = mongoose.model("Person",PersonSchema)
