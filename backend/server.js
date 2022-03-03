const express = require("express");
const dotenv = require("dotenv").config()

const connectDB = require("./config/db")
// routes
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");
const {errorHandler } = require("./middleware/errorMiddleware")

const port = process.env.PORT || 5000;

// connect to database
connectDB()

// initialize express
const app = express();


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(express.urlencoded({extended: true}))
app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler)
app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
} )