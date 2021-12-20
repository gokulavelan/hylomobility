let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'e-bike'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
  var sql = "INSERT INTO customerdetails (Name, College, Register, dept, mobileNo, mail, RFID) VALUES ('gokul','ct','2026113','AD','9677864569','GOKUL@GAIL.COM','123456789')";
  
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  
  });
})
