import express from 'express';

const app = express();

app.set('view engine', 'ejs');

//static server
//csr = client side rendering
//ssr = server side rendering - seo friendly (search engine optimization) fast than csr
//template engine
//ejs , pug , hbs
//react = csr
//ejs - template engine runs dynamic html pages on server side (with help of express js)

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/user', (req, res) => {
    let userData= 
        { name: 'John', age: 30 }
    ;
    res.render('user', {userData });
});
app.get('/list', (req, res) => {
    let arr= [
        "apple",
        "banana",
        "grapes",
        "mango",
        "orange"
    ];
    res.render('list', { arr });
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});