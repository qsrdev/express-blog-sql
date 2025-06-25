import express from "express";
import postController from "../controllers/postController.js";

const router = express.Router();

//index
router.get("/", postController.index);
//lettura singolo post //SHOW
router.get("/:id", postController.show);

export default router;
