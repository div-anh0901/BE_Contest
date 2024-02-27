const mongoose = require('mongoose');


const DBConect = ()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/users");
        console.log("Connect DB Success!!!");

    }catch(err){
        console.log(err)
    }
}

module.exports = DBConect