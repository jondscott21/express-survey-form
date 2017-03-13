const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function (request, response) {
    response.render("index.ejs");
});
app.post('/result', function(req, res) {
    let user_obj = {
        name: req.body.name, dojo: req.body.dojo, language: req.body.language, comment: req.body.comment
    };
    res.render("results.ejs",{users: user_obj});
});
app.listen(8000, function () {
    console.log('listening on port 8000');
});