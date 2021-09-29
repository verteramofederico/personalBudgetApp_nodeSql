let express = require('express');
var cors = require('cors')
let path = require('path');
let app = express();
const method = require('method-override'); // put  delete. NPM I method-override


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(method("_method")) 

const main = require('./routes/mainRouter');
app.use(main)
const apiRouter = require('./routes/api/APIRouter')
app.use('/api',apiRouter);

app.use(express.static('public'))

app.listen(3001, () =>
console.log('Servidor corriendo en http://localhost:3001/')
);

app.use(express.static(path.resolve(__dirname,"../public")));


