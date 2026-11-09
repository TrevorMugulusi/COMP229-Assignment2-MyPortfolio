
import express from "express";
import projectCtrl from "../controllers/project.controller.js";

const router = express.Router();

// GET all projects and POST a new project
router.route("/api/projects")
  .get(projectCtrl.list)
  .post(projectCtrl.create)
  .delete(projectCtrl.removeAll);

// GET, PUT and DELETE one project by ID
router.route("/api/projects/:id")
  .get(projectCtrl.read)
  .put(projectCtrl.update)
  .delete(projectCtrl.remove);

export default router;
