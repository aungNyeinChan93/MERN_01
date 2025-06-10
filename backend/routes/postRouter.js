import { Router } from 'express'
import postController from '../controllers/postController.js';

const postRouter = Router();

postRouter.post('/create', postController.create)
postRouter.get('/', postController.allPosts)
export default postRouter;