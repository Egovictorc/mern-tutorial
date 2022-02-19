const express = require("express");
const dotenv = require("dotenv").config()
// routes
const goalRoutes = require("./routes/goalRoutes");
const {errorHandler } = require("./middleware/errorMiddleware")

const port = process.env.PORT || 5000;


// initialize express
const app = express();


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(express.urlencoded({extended: true}))
app.use("/api/goals", goalRoutes);
app.use(errorHandler)
app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
} )