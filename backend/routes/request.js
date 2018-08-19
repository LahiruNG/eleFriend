var express = require('express');
var router = express.Router();
var dbcon = require('../config/connection');


router.get("/all", (req, res)=>{
    dbcon.query("SELECT * FROM user_details", (err, results)=>{
        if(err){
            console.log(err)
        }
        var result_data = []
        result_data = JSON.stringify(results)
        res.send(result_data)
    })

})
module.exports = router;