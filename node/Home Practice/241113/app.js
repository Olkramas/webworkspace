const express = require('express');
const server = express();
const fs = require('fs');

server.listen(3000, ()=>{
    console.log('Server Start');
    console.log('http://localhost:3000');
})

server.get('/', (req, res) => {
    res.sendFile('index.html', {root : __dirname});
})

const jsonFile = fs.readFileSync('data.json');
const jsonData = JSON.parse(jsonFile);

server.get('/emps', (req,res)=> {
    //res.send("Emp All List");
    res.send(jsonData);
})

server.get('/emps/:id', (req, res)=> {
    res.send("Emp");
})

server.post('/emps', (req, res)=>{
    res.send('Emp Insert');
})

server.put('/emps/:id',(req, res)=>{
    res.send('Emp Update');
})

server.delete('/emps/:id', (req, res)=>{
    res.send('Emp Delete');
})