import express from "express";
import postController from "../controllers/postController.js";

const router = express.Router();

//index
router.get("/", postController.index);
//lettura singolo studente //SHOW
// router.get("/:id", postController.show);

export default router;
