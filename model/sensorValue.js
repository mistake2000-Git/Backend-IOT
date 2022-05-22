const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const Schema = mongoose.Schema

const sensorSchema = new Schema({
    deviceID:
    {
        type:String,
        required:true
    },
    device_Name:
    {
         type: String,
         required : true
    },
    Sensor:
    {
        type:String,
        required:true
    },
    Value:
    {
         type: Number,
         required:true
    },
    Time:
    {
        type:String,
        required:true
    }
 
 })
 module.exports = mongoose.model('sensorValue',sensorSchema)