const express = require();
const bodyParser = require('body-parser');
const path = require('path');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRoutes = require('./controllers/userControllers');

const app = express();

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(bodyParser.json());

// serve the static files from React app
app.use(express.static(path.join(__dirname, 'client', 'build')));

// routes
app.use('/api/v1/users', userRoutes);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
  
// error handling middleware
app.use(globalErrorHandler);

module.exports = app;