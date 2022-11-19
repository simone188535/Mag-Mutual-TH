const pool = require("../db");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getUser = catchAsync(async (req, res, next) => {
  const rq = req.query;

  if (Object.keys(rq).length === 0) {
    return next(
      new AppError(
        "An id, username, or email must be provided to retrieve a user.",
        406
      )
    );
  }

  // dynamically create querystr and prepared statement
  let i = 1;
  const preparedStatementArr = [];
  let appendedQueryString = ``;
  for (const val in rq) {
    const andClause = appendedQueryString.length > 0 ? "AND" : "";
    appendedQueryString += `${andClause} ${val} = ($${i})`;

    preparedStatementArr.push(rq[val]);
    i += 1;
  }

  const { rows } = await pool.query(
    `SELECT * FROM users WHERE ${appendedQueryString}`,
    preparedStatementArr
  );

  if (rows.length === 0) {
    return next(new AppError("This user does not exist.", 404));
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

exports.getUsersInDateRange = catchAsync(async (req, res, next) => {
  const { from = "1-01-1000", to = "1-01-3000" } = req.query;

  const ISOTo = new Date(to);
  const ISOFrom = new Date(from);

  if (ISOTo < ISOFrom) {
    return next(new AppError("Invalid date!", 406));
  }

  const { rows } = await pool.query(
    "SELECT * FROM users WHERE dateCreated BETWEEN ($1) AND ($2)",
    [ISOFrom, ISOTo]
  );

  res.status(200).json({
    status: "success",
    allUsers: rows,
    totalUsersInRange: rows.length,
  });
});
