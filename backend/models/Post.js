import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    imageUrl: { type: String, trim: true },
    user_id: { required: true, type: Schema.Types.ObjectId, ref: "User" }
}, {
    timestamps: true
});

const PostModel = model('Post', postSchema, 'posts');

export default PostModel;
