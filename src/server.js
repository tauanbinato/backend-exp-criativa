require('dotenv/config');

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database');

const app = express();

app.use(express.json());
app.use((req,res,next) => {
    const allowedOrigins = ['http://localhost:8080', 'https://esuper.adazulpool.com'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,access-control-allow-origin");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    app.use(cors);
    next();
});
app.use(routes);
app.listen(process.env.PORT || 3333);