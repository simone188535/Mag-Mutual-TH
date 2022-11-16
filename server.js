const Pool = require('./db');

// establish db connection
Pool.connect()
.then(() => console.log('PG DB connection successful!'))
.catch((err) => {
  console.log('PG DB connection failed!', err);
  Pool.end();
});

const app = require('./app');

// start server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});