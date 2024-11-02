import express from "express";
import { addUser, getUserByID} from "../controllers/user.js";
const router = express.Router();

router.get("/user/:id", getUserByID)

router.post("/user",addUser)

export default router;