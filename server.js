const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const users = require("./routes/api/users");

const app = express();

//Body parser middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config

const db = require("./config/keys").mongoURI;

// Connect to mongodb

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello world"));
const port = process.env.PORT || 5000;

// Use routes

app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("/api/users", users);

app.listen(port, () => console.log(`Server running on port ${port}`));
