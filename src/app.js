const express = require("express");
const mongoose = require("mongoose");
const dbConnect = require("./config/dbConnect");
const { errorHandler } = require("./middleware/errorMiddleware");
const { notfound } = require("./middleware/notFound");

const app = express();
const userRoute = require("./routes/users/usersRoute");

const cors = require('cors');

mongoose.set("strictQuery", false);
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.json({
        msg:"welcome expense tracker api"
    })
})

//datrabase connection
dbConnect();

//users routes
app.use("/api/users", userRoute);

//error
app.use(notfound);
app.use(errorHandler);

module.exports = app;