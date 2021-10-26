require('dotenv/config');

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database');

const app = express();

app.use(express.json());
app.use((req,res,next) => {
    console.log('q');
    req.header("Access-Control-Allow-Origin", "*");
    app.use(cors);
    next();

});
app.use(routes);
app.listen(process.env.PORT || 3333);