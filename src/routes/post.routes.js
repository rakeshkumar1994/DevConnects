const express = require('express');
const { createPost, getPosts } = require('../controllers/post.controller');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

router.post('/', authMiddleware, createPost);
router.get('/', getPosts);

module.exports = router;
