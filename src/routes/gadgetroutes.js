import express from "express";
import { getGadgets, createGadget, updateGadget, decommissionGadget, selfDestructGadget } from "../controllers/gadgetcontroller.js";
import { login } from "../controllers/authcontroller.js";
import {authenticateToken} from "../middlewares/auth.js"

const router = express.Router();


router.post("/login", login);
router.get("/gadgets",authenticateToken, getGadgets);
router.post("/gadgets",authenticateToken, createGadget);
router.patch("/gadgets/:id",authenticateToken, updateGadget);
router.delete("/gadgets/:id",authenticateToken, decommissionGadget);
router.post("/gadgets/:id/self-destruct",authenticateToken, selfDestructGadget);

export default router;