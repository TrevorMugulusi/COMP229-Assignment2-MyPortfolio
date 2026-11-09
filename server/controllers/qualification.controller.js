
import Qualification from "../models/qualification.model.js";
import errorHandler from "./error.controller.js";

// POST - Create a qualification
const create = async (req, res) => {
  try {
    const qualification = new Qualification(req.body);
    await qualification.save();
    res.status(201).json(qualification);
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// GET - Get all qualifications
const list = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// GET - Get one qualification by ID
const read = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);

    if (!qualification) {
      return res.status(404).json({ error: "Qualification not found" });
    }

    res.json(qualification);
  } catch (err) {
    res.status(400).json({ error: "Invalid qualification ID" });
  }
};

// PUT - Update a qualification
const update = async (req, res) => {
  try {
    const qualification = await Qualification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!qualification) {
      return res.status(404).json({ error: "Qualification not found" });
    }

    res.json(qualification);
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// DELETE - Delete one qualification
const remove = async (req, res) => {
  try {
    const qualification = await Qualification.findByIdAndDelete(req.params.id);

    if (!qualification) {
      return res.status(404).json({ error: "Qualification not found" });
    }

    res.json({ message: "Qualification deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Invalid qualification ID" });
  }
};

// DELETE - Delete all qualifications
const removeAll = async (req, res) => {
  try {
    await Qualification.deleteMany({});
    res.json({ message: "All qualifications deleted successfully" });
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

export default { create, list, read, update, remove, removeAll };
