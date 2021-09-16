let express = require('express');
let path = require('path');
let app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('home')
    }
    )
    

app.use(express.static('public'))

app.listen(3000, () =>
console.log('Servidor corriendo en http://localhost:3000/')
);

app.use(express.urlencoded({extended:false}))

