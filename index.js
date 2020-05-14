const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

app.use('/', express.static('./node_modules/admin-lte'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', function (req, res) {
    res.render('bikers',
        { title: "Lets Admin" }
    );
});


// Server Listening
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});