const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database/db');

const jobRoute = require('./routes/job.routes');

mongoose.Promise = global.Promise;
mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => { console.log('Database is connected') },
        err => { console.log('Can not connect to the database' + err) }
    );

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', jobRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})