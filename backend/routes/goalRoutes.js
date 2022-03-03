const express = require("express");
const router = express.Router();

const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController");

const {protect } = require("../middleware/authMiddleware")
// a better clean metthod

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);



// router.get("/", postGoals(req, res));

// router.post("/", postGoals(req, res));

// router.put("/:id", updateGoal(req, res));

// router.delete("/:id", deleteGoals(req, res) );

module.exports = router;
