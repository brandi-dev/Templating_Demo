const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public'))

app.set('view engine', 'ejs');
// instead of using my working directory, 
// use the directory where this index.js file is located
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    // do not need to include ".ejs" if we set the view engine to ejs
    res.render('home')
})

app.get('/loops', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephaine', 'Winston'
    ]
    res.render('loops', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notFound', { subreddit })
    }
    
})

app.get('/conditional', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('conditional', { num })
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})