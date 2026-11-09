
import Contact from "../models/contact.model.js";
import errorHandler from "./error.controller.js";

// POST - Create a contact
const create = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// GET - Get all contacts
const list = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// GET - Get one contact by ID
const read = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.json(contact);
  } catch (err) {
    res.status(400).json({ error: "Invalid contact ID" });
  }
};

// PUT - Update a contact by ID
const update = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.json(contact);
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// DELETE - Delete one contact by ID
const remove = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Invalid contact ID" });
  }
};

// DELETE - Delete all contacts
const removeAll = async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.json({ message: "All contacts deleted successfully" });
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

export default { create, list, read, update, remove, removeAll };
