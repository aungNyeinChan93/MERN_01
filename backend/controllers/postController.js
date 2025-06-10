import PostModel from "../models/Post.js";


const postController = {
    create: async (req, res, next) => {
        try {
            const { token } = req.cookies;
            if (token) {
                const { title, description, imageUrl, user_id } = req.body;
                const post = await PostModel.create({ title, description, imageUrl, user_id })
                if (!post) {
                    return next(new Error('post create has been failed'));
                }
                res.status(200).json({
                    mess: 'success',
                    result: post
                })
            } else {
                return next(new Error('user does not authorize'))
            }
        } catch (error) {
            return next(error)
        }
    },
    allPosts: async (req, res, next) => {
        try {
            const posts = await PostModel.find().lean();
            if (!posts) {
                return next(new Error('post not found!'))
            }
            res.status(400).json({
                mess: 'success',
                result: posts
            })
        } catch (error) {
            return next(error)
        }
    }

}

export default postController;