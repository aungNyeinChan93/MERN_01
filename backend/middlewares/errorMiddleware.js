

const errorMiddleware = (err, req, res, next) => {
    const statusCode = req.statusCode ? req.statusCode : 500;
    if (err) {
        res.status(statusCode).json({
            error: err.message
        })
    }
}

export default errorMiddleware;