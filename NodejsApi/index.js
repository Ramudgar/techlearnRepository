const express = require("express");
const app = express();


app.use(express.json());

const connectDB = require("./database/database");
const userRoutes = require("./routes/userRoutes");
const registerLogin = require("./routes/registerLogin");

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
app.use(userRoutes);
app.use(registerLogin);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
