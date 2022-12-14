const Pool = require("../../db");
const fs = require("fs");
const { parse } = require("csv-parse");

// connect to DB
Pool.connect()
  .then(() => console.log("PG DB connection successful!"))
  .catch((err) => {
    console.log("PG DB connection failed!", err);
    Pool.end();
  });

const seedCSVData = async (row) => {
  try {
    await Pool.query(
      "INSERT INTO users(id, lastname, firstname, email, profession, dateCreated, country, city) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [Number(row[0]), row[1], row[2], row[3], row[4], new Date(row[5]), row[6], row[7]]
    );
  } catch (e) {
    // handle errors
    console.log('err', e);
  }
};
// traverse CSV
const csvData = [];

fs.createReadStream(__dirname + "/UserInformation.csv").pipe(
  parse({ delimiter: ",", from_line: 2 })
    .on("data", function (row) {
      csvData.push(row);
    })
    .on("end", async function() {
        await Promise.all(csvData.map(async (row) => seedCSVData(row)));
        // End DB Connection
        Pool.end();
        // success log
        console.log('users table populated');
        // end node script
        process.exit();
    })
    .on("error", function (error) {
      console.log(error.message);
    })
);

