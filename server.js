const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const db = require("./models");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();

// Handlebars
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
    extname: '.handlebars',
    defaultLayout: 'main',
    layoutsDir: './views/layouts',
    partialsDir: './views/partials'
}));

// Middelware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('./public'));

// Routes
app.use('/', require('./routes/html-routes'));
app.use('/api', require('./routes/api-routes'));

// test the database
db.sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
        app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));
    })
    .catch((err) => console.log('Database error: ' + err));

    //db.sequelize.sync({ force: true });

