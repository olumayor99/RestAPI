const express = require("express");
const taskController = require("../controllers/tasks");

// Initialize Router
const router = express.Router();

// CRUD

// Create (task) POST
router.post("/createTask", taskController.createTask);

// Read (task) GET
router.get("/getTask/:id", taskController.getTask);

// Update (task) PATCH
router.patch("/updateTask/:id", taskController.updateTask);

// Delete (task) DELETE
router.delete("/deleteTask/:id", taskController.deleteTask);

module.exports = router;
