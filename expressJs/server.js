const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/userdetail', (req, res) => {
    let user={
        name: "Uplaksh Rajoria",
        age: 21,
        email: "raghav@example.com"
    }
    res.json(user);
});

app.get('/about', (req, res) => {
    res.send('This is About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact us at uplaksh@example.com');
});
app.get('/profile', (req, res) => {
    res.json({
        username: "raghav",
        hobbies: ["reading", "gaming", "coding"]
    });
});

app.get('/status', (req, res) => {
    res.send('Server is running fine');
});

app.get('/course', (req, res) => {
    res.json({
        course: "Java & Node.js",
        duration: "3 months"
    });
});

app.get('/logout', (req, res) => {
    res.send('You have been logged out');
});
app.get('/help', (req, res) => {
    res.send('This is the help page');
});

app.get('/version', (req, res) => {
    res.json({
        app: "My Express App",
        version: "1.0.0"
    });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});