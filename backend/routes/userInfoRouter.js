import { Router } from "express";
import { JWT } from "../utils/helper.js";
import User from '../models/User.js'
const usreInfoRouter = Router();

usreInfoRouter.get('/', async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.json({});
    }
    const userInfo = JWT.getToken(token, process.env.SECRECT_KEY);
    const auth = await User.findById(userInfo.id, { password: false, __v: false }).lean();
    return res.json({
        mess: 'success',
        result: auth
    });
})

export default usreInfoRouter;