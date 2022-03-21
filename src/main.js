const express = require("express");
const { connect } = require("http2");
const app = express();

const mongoose = require("mongoose");

const Connect = () => {
    return mongoose.connect("mongodb://localhost:27017/bookSystem");
}

app.listen(2700, async () => {
    try{
        await Connect();
        console.log("Listening at 2700");
    }
    catch(err){
        console.log(err);
    }
})