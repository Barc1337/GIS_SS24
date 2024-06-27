const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to DB
const db = new sqlite3.Database('./myDatabase.db',sqlite3.OPEN_READWRITE,(err)=> {
    if (err) return console.error(err.message);
});

//Create table
//sql = `CREATE TABLE Iphones(id INTEGER PRIMARY KEY,name,color,price)`;
//db.run(sql);

//Drop table
// db.run("DROP TABLE Iphones");

//Insert data into table
//sql = `Insert INTO Iphones(name,color,price) VALUES (?,?,?,?,?)`;
//db.run (
//    sql,
//   ["Apple Iphone 15 128 GB","Schwarz","799"],
//   (err) => {
//    if (err) return console.error(err.message);
//}
//);

//update data
//sql = `UPDAtE Iphones SET name = ? WHERE price id= ?`;
//db.run(sql,['Apple Iphone 15 128 GB', 1], (err) => {
//    if (err) return console.error(err.message);
//});

//Delete data
//sql = `DELETE FROM Iphones WHERE id=?`;
//db.run(sql,['', 1], (err) => {
//    if (err) return console.error(err.message);
//});

//query the data
sql = `SELECT * FROM Iphones`;
db.all(sql, [], (err, rows) => {
   if (err) return console.error(err.message);
    rows.forEach((row) => {
        console.log(row);
    });
    })
