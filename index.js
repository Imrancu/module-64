const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my my smarty smarty port!!');
});

const users = [
    {id: 1, name: 'Noman', email: 'noman@gmail.com', phone: '01615452845'},
    {id: 2, name: 'Jibon', email: 'jibon@gmail.com', phone: '01615452845'},
    {id: 3, name: 'Shakil', email: 'shakil@gmail.com', phone: '01615452845'},
    {id: 4, name: 'Arif', email: 'arif@gmail.com', phone: '01615452845'},
    {id: 5, name: 'Alom', email: 'alom@gmail.com', phone: '01615452845'},
    {id: 6, name: 'Bakkor', email: 'bakkor@gmail.com', phone: '01615452845'},
]

app.get('/users', (req, res)=>{
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
})

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u =>u.id === id);
    res.send(user);
});

app.get('/fruits', (req, res)=> {
    res.send(['Mango', 'Apple', 'Orange'])
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port);
});
