import connection from "../db.js";

const index = (req, res) => {
  const sql = "SELECT * FROM posts";

  connection.query(sql, (err, result) => {
    res.json({
      info: "Stampo le ricette",
      totalcount: result.length,
      data: result,
    });
  });
};

const show = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM posts WHERE id = ?;";

  connection.query(sql, [id], (err, results) => {
    if (results.length == 0) {
      res.status(404).json({
        error: "post non trovato",
      });
    } else {
      res.json({
        data: results[0],
      });
    }
  });
};

const controller = {
  index,
  show,
};

export default controller;
