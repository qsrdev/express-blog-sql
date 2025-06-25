import connection from "../db.js";

//index
const index = (req, res) => {
  const sql = "SELECT * FROM posts";

  connection.query(sql, (err, result) => {
    if (result.length == 0) {
      res.status(404).json({
        error: "post non trovato",
      });
    } else {
      res.status(200).json({
        info: "Stampo le ricette",
        totalcount: result.length,
        data: result,
      });
    }
  });
};

//show
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

//destroy
const destroy = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM posts WHERE id = ?;";

  connection.query(sql, [id], (err, results) => {
    if (err) {
      res.status(404).json({
        errore: `Post non trovato`,
      });
    } else {
      console.log(results);
      res.status(204).json({
        info: `cancellato il post n${id}`,
      });
    }
  });
};

const controller = { index, show, destroy };

export default controller;
