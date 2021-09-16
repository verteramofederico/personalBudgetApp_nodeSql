let express = require('express');
let path = require('path');
let app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({extended: true}))

const main = require('./routes/mainRouter');
app.use(main)

app.use(express.static('public'))

app.listen(3000, () =>
console.log('Servidor corriendo en http://localhost:3000/')
);



