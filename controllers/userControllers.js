const pool = require("../db");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getUser = catchAsync(async (req, res, next) => {
  const { id, profession, email } = req.query;

  let findVal;
  let preparedStatementVal;

  if (id) {
    findVal = "id";
    preparedStatementVal = id;
  } else if (profession) {
    findVal = "profession";
    preparedStatementVal = profession;
  } else if (email) {
    findVal = "email";
    preparedStatementVal = email;
  } else {
    return next(
      new AppError(
        "An id, username, or email must be provided to retrieve a user.",
        406
      )
    );
  }

  const { rows } = await pool.query(
    `SELECT * FROM users WHERE ${findVal} = ($1)`,
    [preparedStatementVal]
  );

  if (rows.length === 0) {
    return next(new AppError('This user does not exist.', 404));
  }

  res.status(200).json({
    status: "success",
    allUsers: rows,
    totalUsers: rows.length,
  });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const { rows } = await pool.query("SELECT * FROM users");

  res.status(200).json({
    status: "success",
    allUsers: rows,
    totalUsers: rows.length,
  });
});

// exports.getUserById = catchAsync(async (req, res, next) => {
//   const { id } = req.params;

//   const userId = Number(id);

//   if (!userId) {
//     return next(new AppError("No user id was provided!", 406));
//   }

//   const { rows } = await pool.query("SELECT * FROM users WHERE id = ($1)", [
//     userId,
//   ]);

//   res.status(200).json({
//     status: "success",
//     user: rows[0],
//   });
// });

// exports.getUserByEmail = catchAsync(async (req, res, next) => {
//   const { email } = req.params;

//   if (!email) {
//     return next(new AppError("No user email was provided!", 406));
//   }

//   const { rows } = await pool.query("SELECT * FROM users WHERE email = ($1)", [
//     email,
//   ]);

//   res.status(200).json({
//     status: "success",
//     user: rows[0],
//   });
// });

exports.getUsersInDateRange = catchAsync(async (req, res, next) => {
  const { from = '1-01-1000', to = '1-01-3000' } = req.query;

//   if (!from || !to) {
//     return next(new AppError("to and from must be provided!", 406));
//   }

  const { rows } = await pool.query(
    "SELECT * FROM users WHERE dateCreated BETWEEN ($1) AND ($2)",
    [new Date(from), new Date(to)]
  );

  res.status(200).json({
    status: "success",
    totalUsersInRange: rows.length,
    user: rows
  });
});

// exports.getUsersOfProfession = catchAsync(async (req, res, next) => {
//   const { profession } = req.body;

//   if (!profession) {
//     return next(new AppError("No user profession was provided!", 406));
//   }

//   const { rows } = await pool.query(
//     "SELECT * FROM users WHERE profession = ($1)",
//     [profession]
//   );

//   res.status(200).json({
//     status: "success",
//     user: rows,
//   });
// });
