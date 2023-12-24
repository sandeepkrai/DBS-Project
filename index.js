const express = require("express");
const database = require("./connection");

const app = express();
const PORT = process.env.PORT || 8000;

// Define a route to insert a new user into the database
app.get("/users", (req, res) => {
  database.insertUser("John", "Doe", "johndoe@example.com", (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error inserting user into database");
    } else {
      res.send("User inserted successfully");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
