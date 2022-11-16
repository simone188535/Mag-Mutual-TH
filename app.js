const express = require();
const app = express();
const path = require('path');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

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