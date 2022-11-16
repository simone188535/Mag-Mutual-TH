const { Pool } = require('pg');
const keys = require('../keys');

const pool = new Pool({
  user: keys.DBuser,
  host: keys.DBhost,
  database: 'magmutualth',
  password: keys.password,
  port: keys.DBport,
});

module.exports = pool;
