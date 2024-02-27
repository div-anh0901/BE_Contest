const express = require('express');
const app = express();
const db = require('./until/DBConnect');
const router = require('./router/router');

//setup request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect db
db();

//router

app.use("/api", router);

app.listen(3000, ()=>{
    console.log("connect server success !!")
})
