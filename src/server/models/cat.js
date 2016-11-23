var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var CatSchema = new Schema({
  name:{type:String,required:true},
  age:{type:Number,required:true},
  weight:{type:Number,required:true}
});

module.export = mongoose.model("Cat",CatSchema);

