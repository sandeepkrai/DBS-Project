const oracledb = require("oracledb");

// Connection information for the database
const dbConfig = {
  user: "system",
  password: "student",
  connectString: "LAPTOP-5H4FAT7M:1521/CLRExtProc",
};

// Connect to the database
oracledb.getConnection(dbConfig, (err, connection) => {
  if (err) {
    console.error(err.message);
    return;
  }

  console.log("Connected to Oracle Database");

  // Execute a query
  connection.execute(`SELECT * FROM yourtable`, (err, result) => {
    if (err) {
      console.error(err.message);
      return;
    }

    // Output the results
    console.log(result.rows);

    // Insert data into the table
    connection.execute(
      `INSERT INTO yourtable (col1, col2) VALUES (:1, :2)`,
      ["value1", "value2"],
      (err, result) => {
        if (err) {
          console.error(err.message);
          return;
        }

        console.log("Data inserted into the table");

        // Release the connection
        connection.release((err) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log("Connection released");
          }
        });
      }
    );
  });
});
