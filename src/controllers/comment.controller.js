const Comment = require("../models/comment.model");

exports.addComment = async (req, res) => {
  try {
    // const { postId } = req.params;

    const comment = await Comment.create({
      ...req.body,
      author: req.user.id,
    //   post: postId, // assuming your Comment model has a 'post' field
    });

    res.status(201).json(comment);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add comment", error: error.message });
  }
};

exports.getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate({
      path: "author",
      select: "-password", // ⛔️ explicitly exclude password
    })
    // .populate({
    //   path: "post",
    // });
  res.json(comments);
};
