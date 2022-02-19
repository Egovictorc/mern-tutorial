const express = require("express");
const router = express.Router();

const { getGoals, postGoals, putGoals, deleteGoals } = require("../controllers/goalController");

// a better clean metthod

router.route("/").get(getGoals).post(postGoals);
router.route("/:id").put(putGoals).delete(deleteGoals);



// router.get("/", postGoals(req, res));

// router.post("/", postGoals(req, res));

// router.put("/:id", putGoals(req, res));

// router.delete("/:id", deleteGoals(req, res) );

module.exports = router;
