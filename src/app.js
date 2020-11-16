const express = require('express')
const mongoose = require('mongoose')
const app = express()
const mod = require('./models/model.js')
const port = process.env.PORT || 3000
const URI = 'mongodb+srv://dbUser:dbUser@cluster0.oyo9j.mongodb.net/API?retryWrites=true&w=majority';

mongoose.connect(URI,{
    useNewUrlParser:true , useUnifiedTopology:true ,useCreateIndex: true
})

app.use(express.json())

app.get('/test',(req,res)=>{
    res.send('Its up')
})

app.get('/',(req,res)=>{
    res.send('Send the request in below form: /n?name=%name of the song%')
})

app.get('/n',async(req,res)=>{
    
    try{
        console.log(req.query.name)
        const q = req.query.name.toLowerCase()
        const ans = await mod.find({ title : q}).exec()
        if(!ans){
            return res.send('null')
        }
        res.send(ans)

    }catch(e){
        res.status(500).send('error')
    }


})

app.listen(port, ()=>{
    console.log('Server is up')
})
