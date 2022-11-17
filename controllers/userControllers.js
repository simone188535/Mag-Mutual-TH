const pool = require("../db");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");


exports.getAllUsers = catchAsync(async(req, res, next) => {

    const { rows } = await pool.query("SELECT * FROM users" );

    res.status(200).json({
        status: 'success',
        allUsers: rows
    });
});

exports.getUserById = catchAsync(async(req, res, next) => {
    const { id } = req.params;

    const userId = Number(id);

    if (!userId) {
        return next(new AppError('No user id was provided!', 406));
    }

   const { rows } = await pool.query(
        "SELECT * FROM users WHERE id = ($1)",
        [userId]
    );

    res.status(200).json({
        status: 'success',
        user: rows[0]
    });
});

exports.getUserByEmail = catchAsync(async(req, res, next) => {
    const { email } = req.body;

    if (!email) {
        return next(new AppError('No user email was provided!', 406));
    }

    const { rows } = await pool.query(
        "SELECT * FROM users WHERE email = ($1)",
        [email]
    );

    res.status(200).json({
        status: 'success',
        user: rows[0]
    });
});


exports.getUsersInDateRange = catchAsync(async(req, res, next) => {
    const { from, to } = req.body;

    if (!from || !to) {
        return next(new AppError('to and from must be provided!', 406));
    }

    const { rows } = await pool.query(
        // "SELECT * FROM users WHERE dateCreated =< ($1) AND dateCreated >= ($2)",
        "SELECT * FROM users WHERE dateCreated =< ($1)",
        [from]
    );
    
    res.status(200).json({
        status: 'success',
        user: rows
    });
});

exports.getUsersOfProfession = catchAsync(async(req, res, next) => {
    const { profession } = req.body;

    if (!profession) {
        return next(new AppError('No user profession was provided!', 406));
    }

    const { rows } = await pool.query(
        "SELECT * FROM users WHERE profession = ($1)",
        [profession]
    );

    res.status(200).json({
        status: 'success',
        user: rows
    });
});