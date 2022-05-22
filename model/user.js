const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const Schema = mongoose.Schema

const userSchema = new Schema({
   Name:{
       type:String,
       required:true
   },
   userName:
   {
     type:String,
     require:true
   },
   password:
   {
       type:String,
       require:true
   }
 })
 module.exports = mongoose.model('user',userSchema)