import { JWT } from "../utils/helper.js";


/**
 * Middleware to verify and decode JWT token from cookies.
 * 
 * Extracts the token from the request cookies, verifies it using the secret key,
 * and attaches the decoded authentication data to the request object as `req.auth`.
 * Calls the next middleware regardless of token presence or validity.
 *
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 */
const tokenMiddleware = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const auth = JWT.getToken(token, process.env.SECRECT_KEY);
        console.log(auth);
        req.auth = auth
    }
    next();
}

export default tokenMiddleware;