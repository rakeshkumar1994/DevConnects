const Post = require("../models/post.model");

exports.createPost = async (req, res) => {
  const post = await Post.create({ ...req.body, author: req.user.id });
  res.status(201).json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate({
    path: "author",
    select: "-password", // ⛔️ explicitly exclude password
  });
  res.json(posts);
};
