const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const multerConfig = require('../middlewares/multer.config');

router.get('/', postController.getAllPosts);
router.post('/add-post',multerConfig, postController.addPost);
router.get('/:post', postController.getPostById);
router.put('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);

module.exports = router;