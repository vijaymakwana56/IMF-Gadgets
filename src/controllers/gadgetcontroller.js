import Gadget from "../models/gadget.js";
import { v4 as uuidv4 } from "uuid";

export const getGadgets = async (req, res) => {
  const gadgets = await Gadget.findAll();
  const gadgetsWithProbability = gadgets.map((gadget) => ({
    ...gadget.toJSON(),
    successProbability: `${Math.floor(Math.random() * 101)}%`,
  }));
  res.json(gadgetsWithProbability);
};

export const createGadget = async (req, res) => {
  const { name } = req.body;
  const gadget = await Gadget.create({ id: uuidv4(), name });
  res.status(201).json(gadget);
};

export const updateGadget = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;
  await Gadget.update({ name, status }, { where: { id } });
  res.json({ message: "Gadget updated successfully." });
};

export const decommissionGadget = async (req, res) => {
  const { id } = req.params;
  await Gadget.update(
    { status: "Decommissioned", decommissioned_at: new Date() },
    { where: { id } }
  );
  res.json({ message: "Gadget decommissioned." });
};

export  const selfDestructGadget = async (req, res) => {
  const confirmationCode = Math.floor(100000 + Math.random() * 900000);
  res.json({ message: "Self-destruct initiated.", confirmationCode });
};