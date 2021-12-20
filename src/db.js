let mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'e-bike'
});
const app = express();
app.use(cors());

app.use(express.json());


app.post('/register', (req,res)=>{
  const Name = req.body.Name;
  const clg = req.body.clg;
  const regNo = req.body.regNo;
  const dept = req.body.dept;
  const mobileNo = req.body.mobileNo;
  const Email = req.body.Email;
  const rfid = req.body.rfid;
  
  db.query("INSERT INTO customerdetails(Name,College,Register,dept,mobileNo,mail,RFID) VALUES (?,?,?,?,?,?,?)",
   [Name,clg,regNo,dept,mobileNo,Email,rfid],
   (err,result)=>{
     console.log(err);
   })
})

app.listen(3001, () => {
  console.log('Go to http://localhost:3000/users so you can see the data.');
 });
 