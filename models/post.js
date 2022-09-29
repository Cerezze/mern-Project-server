const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    thumbnailTitle:{
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    creator: {
        type: Object,
        required: true
    }
}, 
{timestamps: true}
);

module.exports = mongoose.model('Post', postSchema);