import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blog_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connessione al database avvenuta con successo");
});

export default connection;
