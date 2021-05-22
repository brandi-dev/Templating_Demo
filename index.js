const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
// instead of using my working directory, 
// use the directory where this index.js file is located
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    // do not need to include ".ejs" if we set the view engine to ejs
    res.render('home')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { num })
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})