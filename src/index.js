const pino = require('pino');
const express = require('express');

const port = process.env.PORT || 3000;

const logger = pino({
  level: 'debug',
  ...(process.env.NODE_ENV !== 'production' && {
    transport: { target: 'pino-pretty' },
  }),
  formatters: {
    level: label => ({ level: label }),
  },
});

const app = express();

const log = (req, _res, next) => {
  logger.debug(`handling request on ${req.path}`);

  next();
};

app.get('/', log, (_req, res) => res.send('hello container'));

app.listen(port, () => logger.info(`app listening on port ${port}`));