const express = require('express')
const router = express.Router();
const sensor = require('../model/sensorValue')
const verifyToken = require('../middleware/auth')
var value
var deviceState = false
router.post('/', async(req,res)=>{
    value = req.body
    deviceState = true
    console.log(value)
    const {deviceID,device_Name} = req.body
    try{
        const date = new Date().toLocaleDateString()
        let Sensor = new sensor({deviceID,device_Name,Sensor:"Light",Value:req.body.Light,Time:date})
        await Sensor.save()
        Sensor = new sensor({deviceID,device_Name,Sensor:"Humidity",Value:req.body.Humidity,Time:date})
        await Sensor.save()
        Sensor = new sensor({deviceID,device_Name,Sensor:"Temperature",Value:req.body.Temperature,Time:date})
        await Sensor.save()
        res.status(200).json({success:true})
    }catch(err){
        console.log(err)
        res.status(400).json({success:false})
    }
})
router.get('/getAll',verifyToken,async(req,res)=>{
    const sensorValues = await sensor.find()
    res.json(sensorValues)
})

router.get('/',async(req,res)=>{
    res.json({value,state:deviceState})
    deviceState= false
})

module.exports= router