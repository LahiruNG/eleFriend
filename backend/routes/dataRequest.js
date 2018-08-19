var express = require('express');
var dataRouter = express.Router();
var dbcon = require('../config/connection');

dataRouter.get("/all", (req, res)=>{
    dbcon.query("SELECT * FROM reporteddata LIMIT 10 ", (err, results)=>{
        if(err){
            console.log(err)
        }
        var result_data = []
        result_data = JSON.stringify(results)
        res.send(result_data)
    })

})
module.exports = dataRouter;