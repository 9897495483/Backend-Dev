const express = require('express');
const app = express();
const users=require('./data.js');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.get('/usersabove25', (req, res) => {
    const above25 = users.filter(user => user.age > 25);
    res.status(200).json(above25);
});


app.get('/user/mr', (req, res) => {
    const usersWithMrPrefix=users.map(user=>{
        return {
            ...user,
            name: `Mr. ${user.name}`
        };
    });
    res.status(200).json(usersWithMrPrefix);    
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
});
