require('dotenv/config');

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors)
app.listen(process.env.PORT || 3333);