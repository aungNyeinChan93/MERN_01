

const tokenMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        req.token = token;
        console.log(token);
    }
    next();
}

export default tokenMiddleware;