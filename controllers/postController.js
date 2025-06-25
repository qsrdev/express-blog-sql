import connection from "../db.js";

const index = (req, res) => {
  const sql = "SELECT * FROM posts";

  connection.query(sql, (err, result) => {
    console.log(result);
  });
  res.json({
    data: "Stampo le ricette",
  });
};

// const show = (req, res) => {
//   const id = req.params.id;
//   const sql = "SELECT * FROM students WHERE id = ?;";

//   connection.query(sql, [id], (err, results) => {
//     if (results.length == 0) {
//       res.status(404).json({
//         error: "Studente non trovato",
//       });
//     } else {
//       res.json({
//         data: results[0],
//       });
//     }
//   });
// };

const controller = {
  index,
};

export default controller;
