const pino = require('pino');
const express = require('express');

const port = process.env.PORT || 3000;

const logger = pino({
  prettyPrint: process.env.NODE_ENV !== 'production',
})

const app = express();

app.get('/', (req, res) => res.send('hello docker'));

app.get('/hello', (req, res) => res.send('hello world'))

app.get('/hello/:name', (req, res) => res.send(`hello ${req.params.name}`))

app.listen(port, () => logger.info(`app listening on port ${port}`));