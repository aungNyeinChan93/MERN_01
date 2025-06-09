import { Router } from "express";
import { JWT } from "../utils/helper.js";

const usreInfoRouter = Router();

usreInfoRouter.get('/', (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.json({});
    }
    const userInfo = JWT.getToken(token, process.env.SECRECT_KEY);
    return res.json({
        mess: 'success',
        result: userInfo
    });
})

export default usreInfoRouter;