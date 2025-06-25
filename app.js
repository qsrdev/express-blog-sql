import express from "express";
import postRouter from "./routers/post.js";

const app = express();
const port = 3000;

app.use(express.json()); //body parsers

app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});
