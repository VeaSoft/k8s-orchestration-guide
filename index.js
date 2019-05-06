const express = require('express');

const app = express();

const host = process.env.DOCKER_TUTORIAL_URL || 'localhost';
const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    return res.render('index');
});


app.listen(port, function () {
    console.log("Docerk nodejs Site Started")
});
