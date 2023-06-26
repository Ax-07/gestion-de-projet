const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    titre: { type: String, required: true, trim: true, minLength: 3, maxLength: 128 },
    contenu: { type: String, required: true, trim: true, minLength: 3, maxLength: 512 },
}, {timestamps: true})

const PostModel = mongoose.model('Post', postSchema);
  
module.exports = PostModel;