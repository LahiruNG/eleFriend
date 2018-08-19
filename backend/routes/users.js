var express = require('express');
var router = express.Router();
var dbcon = require('../config/connection');

// /* GET users listing. */
// router.get('/all', function(req, res, next) {
//   console.log("backend function  called")

//   dbcon.query("SELECT * From users", (err,results)=>{
//     if(err){
//       console.log(err)
//     }else{
//       var result_data =[]
//       result_data = JSON.stringify(results)
//       res.send(result_data)

//     }
//   })
  
// });

router.post('/new', (req, res) => {
  var user_name = req.body.user_name
  var user_mobile_no = req.body.user_mobile_no
  var user_adress = req.body.user_adress
  var nic_number = req.body.nic_number
  var user_type = req.body.user_type

  //insert data to user table
  var req_data= [user_mobile_no, user_name, user_adress, nic_number, user_type]
  console.log(req_data)
  var sql1 = "INSERT INTO user_details(mobile_number, user_name, address, nic_number, user_type) VALUES(?,?,?,?,?)"
  dbcon.query(sql1, req_data, (err, result) => {
    if(err){
      console.log("error in query statement")
    } else {
      console.log("no of records inserted :" + result.affectedRows)
      //consol.log(dbcon.query("SELECT LAST_INSERTED_ID()").values)
      res.send("Added Ok")
    }
  }
)
});

router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
