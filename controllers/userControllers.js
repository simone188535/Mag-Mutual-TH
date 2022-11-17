const catchAsync = require("../utils/catchAsync");
// const AppError = require("../utils/appError");


exports.getAllUsers = catchAsync(async(req, res, next) => {

    // return next(new AppError('Error string', 400));
    res.status(200).json({
        status: 'success',
    });
})
exports.getUserById = catchAsync(async(req, res, next) => {

    res.status(200).json({
        status: 'success',
    });
});

exports.getUserByEmail = catchAsync(async(req, res, next) => {

    res.status(200).json({
        status: 'success',
    });
});


exports.getUsersInDateRange = catchAsync(async(req, res, next) => {
    res.status(200).json({
        status: 'success',
    });
});

exports.getUsersOfProfession = catchAsync(async(req, res, next) => {
    res.status(200).json({
        status: 'success',
    });
});