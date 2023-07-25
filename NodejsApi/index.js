const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

const connectDB = require("./database/database");
const userRoutes = require("./routes/userRoutes");
const registerLogin = require("./routes/registerLogin");
const productRoutes = require("./routes/productRoutes");
const profileRoutes = require("./routes/profileRoutes");

connectDB();
// api routes to send hello world
// app.get("/hello", (req, res) => {
//   res.send("Hello World");
// });

// // api routes to post hello world
// app.post("/helloo", (req, res) => {
//     const data=req.body;
//     console.log(data);
//     const name=data.name;
//     const age=data.age;
//     res.send(`Hello ${name}`);
//     });

// api routes for user from userRoutes.js
app.use(cors());
app.use(userRoutes);
app.use(registerLogin);
app.use(profileRoutes);
// make public folder static
app.use("/public", express.static(__dirname + "/public"));

app.use(productRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
