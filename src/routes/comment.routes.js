const express = require("express");
const {
  addComment,
  getComments,
} = require("../controllers/comment.controller");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();

router.post("/", authMiddleware, addComment);
router.get("/:postId", getComments);

module.exports = router;
