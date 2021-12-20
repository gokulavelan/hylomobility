
const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
//app.use(bodyParser.urlencoded({extended = true}));
app.use(express.json());
  const uri = "mongodb+srv://gokul:gokul@cluster0.xoaey.mongodb.net/e-bike?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  client.connect((err) => {
app.post('/register', (req,res)=>{
  const Name = req.body.Name;
  const clg = req.body.clg;
  const regNo = req.body.regNo;
  const dept = req.body.dept;
  const mobileNo = req.body.mobileNo;
  const Email = req.body.Email;
  const rfid = req.body.rfid;
  var connect = client.db('e-bike').collection('customerDetails');
  var data = {"Name":Name,
              "clg":clg,
              "regNo":regNo,
              "dept":dept,
              "mobileNo":mobileNo,
              "Email":Email,
              "rfid":rfid
}
  
  try {
      connect.insertOne(data);
  } catch (e) {
      console.error(e);
  } finally {
      
  }
    })
  })
app.listen(3001, () => {
  console.log('Go to http://localhost:3000/users so you can see the data.');
 });



