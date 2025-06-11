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
            const posts = await PostModel.find().populate('user_id', ['name', 'email']).sort({ createdAt: -1 });
            if (!posts) {
                return next(new Error('post not found!'))
            }
            res.status(200).json({
                mess: 'success',
                result: posts,
            })
        } catch (error) {
            return next(error)
        }
    },
    getPost: async (req, res, next) => {
        try {
            const { token } = req.cookies;
            if (!token) {
                return next(new Error('user is not authourize!'))
            }
            const { id } = req.params;

            const post = await PostModel.findById(id).populate('user_id', ['name', 'email']).lean();

            const auth_email = req.auth.email;

            if (post.user_id.email !== auth_email) {
                return res.status(403).json({})
            }
            if (!post) {
                return next(new Error('Post not Found!'))
            };
            return res.status(200).json({
                mess: 'success',
                result: post
            })
        } catch (error) {
            return next(error)
        }
    },
    modifyPost: async (req, res, next) => {
        try {
            if (!req.auth) {
                res.status(401)
                return next(new Error('user is not authorize'))
            }
            const { id } = req.params;
            const { title, description, imageUrl } = req.body;
            const updatePost = await PostModel.findByIdAndUpdate(id, { title, description, imageUrl }, { new: true, lean: true });
            if (!updatePost) {
                return next(new Error('update fail!'))
            };
            return res.status(200).json({
                mess: 'success',
                result: updatePost
            })
        } catch (error) {
            return next(error)
        }
    },
    dropPost: async (req, res, next) => {
        try {
            if (req.auth) {
                const { id } = req.params;
                const dropPost = await PostModel.findByIdAndDelete(id, { projection: { title: 1 } });
                if (!dropPost) {
                    return next(new Error('delete fail!'))
                };
                return res.status(200).json({
                    mess: 'success',
                    result: dropPost
                })
            }
            return res.status(401).json({})
        } catch (error) {
            return next(error)
        }
    }



}

export default postController;