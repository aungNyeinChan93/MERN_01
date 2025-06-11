import { Router } from 'express'
import postController from '../controllers/postController.js';
import tokenMiddleware from '../middlewares/tokenMiddleware.js';

const postRouter = Router();

postRouter.get('/', postController.allPosts)
postRouter.post('/create', postController.create);
postRouter.get('/:id', tokenMiddleware, postController.getPost);
postRouter.put('/edit/:id', tokenMiddleware, postController.modifyPost)


export default postRouter;