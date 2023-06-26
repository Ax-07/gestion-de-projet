const PostModel = require('../models/post.model');
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.addPost = async (req, res) => {
    const { titre, contenu} = req.body;
    try {
        const post = await PostModel.create({
            titre,
            contenu
        });
        res.status(200).json({ post: post._id });
    } catch (error) {
        console.log('error create post');
    }
};
module.exports.getPostById = async (req, res) => {
    const postId = req.params.postId;
    if(!ObjectID.isValid(postId)) throw new Error('Id post invalide get');
    try {
        const post = await PostModel.findById(postId);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.updatePost = async (req, res) => {
    const postId = req.params.postId;
    const { titre, contenu } = req.body;

    if(!ObjectID.isValid(postId)) throw new Error('Id post invalide update');
    const updatePost = { titre, contenu}
    try{
        const updatedPost = await PostModel.findByIdAndUpdate(
            postId,
            {$set: updatePost},
            {new: true}
            );
            res.status(200).json(updatedPost)
    } catch {
        res.status(500).json({message: error.message});
    }
}
module.exports.deletePost = async (req,res) => {
    const postId = req.params.postId;
    if(!ObjectID.isValid(postId)) throw new Error('Id post invalide delete');

    try {
        const post = await PostModel.findByIdAndDelete(postId);
        if (!post) res.status(404).json({message: 'Post not found'});
        res.status(204).json({message: 'Post deleted successfully' + postId});
    } catch {
        res.status(500).json({message: error.message});
    }
}