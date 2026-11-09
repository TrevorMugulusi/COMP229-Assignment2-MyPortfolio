
import express from "express";
import qualificationCtrl from "../controllers/qualification.controller.js";

const router = express.Router();

// GET all, POST new, DELETE all
router.route("/api/qualifications")
  .get(qualificationCtrl.list)
  .post(qualificationCtrl.create)
  .delete(qualificationCtrl.removeAll);

// GET, PUT, DELETE by ID
router.route("/api/qualifications/:id")
  .get(qualificationCtrl.read)
  .put(qualificationCtrl.update)
  .delete(qualificationCtrl.remove);

export default router;
