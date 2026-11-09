
import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// GET all users and POST a new user
router.route("/api/users")
  .get(userCtrl.list)
  .post(userCtrl.create)
  .delete(authCtrl.requireSignin, userCtrl.removeAll);

// GET, PUT and DELETE a user by ID
router.route("/api/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    userCtrl.update
  )
  .delete(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    userCtrl.remove
  );

// Load the user from MongoDB using the ID
router.param("userId", userCtrl.userByID);

export default router;
