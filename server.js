const express = require('express');
const bodyParser = require('body-parser')
const app = express(); 
const port = process.env.PORT || 5000;
//const db = require('./db/database')
//parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/hello',(req,res) =>{
    res.send({message:'Hello express'});
});

app.listen(5000,(err)=>{
    if(err) console.log(`err => ${err}`);
    else console.log(`server on 5000!!!!!`)
})