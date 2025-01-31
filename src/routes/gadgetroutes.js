import express from "express";
import { getGadgets, createGadget, updateGadget, decommissionGadget, selfDestructGadget } from "../controllers/gadgetController.js";

const router = express.Router();


router.get("/gadgets", getGadgets);
router.post("/gadgets", createGadget);
router.patch("/gadgets/:id", updateGadget);
router.delete("/gadgets/:id", decommissionGadget);
router.post("/gadgets/:id/self-destruct", selfDestructGadget);

export default router;