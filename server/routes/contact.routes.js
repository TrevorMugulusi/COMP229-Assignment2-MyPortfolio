
import express from "express";
import contactCtrl from "../controllers/contact.controller.js";


const router = express.Router();

// GET all contacts and POST a new contact
router.route("/api/contacts")
  .get(contactCtrl.list)
  .post(contactCtrl.create)
  .delete(contactCtrl.removeAll);

// GET, PUT, and DELETE a contact by ID
router.route("/api/contacts/:id")
  .get(contactCtrl.read)
  .put(contactCtrl.update)
  .delete(contactCtrl.remove);

export default router;
