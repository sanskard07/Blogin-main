const mysql = require("mysql2");


const connection = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"Sd@7498181120",
    database:"Blogin"
});
connection.connect((err)=>{
    if(err){
        console.warn(err)
    }
    else{
        console.log("Connected to mysql")
    }
})

module.exports = connection;