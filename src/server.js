require('dotenv/config');

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database');

const app = express();

app.use(express.json());
app.use((req,res, next) => {
    //console.log('acessou mid');
    res.header("Access-Control-Allow-Origin", "localhost:8080","esuper.adazulpool.com");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use(cors);
    next();
});
app.use(routes);
app.listen(process.env.PORT || 3333);