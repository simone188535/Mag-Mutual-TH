const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getUser = catchAsync(async(req, res, next) => {

    // return next(new AppError('Error string', 400));
    res.status(200);
});