const express = require("express");
const connectDB = require("../config/db");
const userRoutes = require("../routes/userRoutes");
const { notFound, errorHandler } = require("../middlewares/errorMiddleWare");

const app = express();

connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is working well..");
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(9000, console.log("server started"));
