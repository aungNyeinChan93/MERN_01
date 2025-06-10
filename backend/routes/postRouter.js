import { Router } from 'express'
import postController from '../controllers/postController.js';

const postRouter = Router();

postRouter.get('/', postController.allPosts)
postRouter.post('/create', postController.create)
export default postRouter;