const asyncHhandler = require("express-async-handler")

//  @desc Get goals
//  @route GET /api/goals
//  @access Private
const getGoals = asyncHandler(async  (req, res) => {
  res.status(200).json({
    message: "Get goals",
  });
});

//  @desc add goals
//  @route POST /api/goals
//  @access Private
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("please add a text field")
    // .json({
    //   message: "please add a text field",
    // });
  }
//   console.log("req body", req.body);
  res.status(200).json({
    message: "set goals",
  });
});

//  @desc Update goals
//  @route PUT /api/goals
//  @access Private
const putGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `added goal ${req.params.id}`,
  });
});

//  @desc Delete goals
//  @route DELETE /api/goals/:id
//  @access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `deleted goal ${req.params.id}`,
  });
});

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
