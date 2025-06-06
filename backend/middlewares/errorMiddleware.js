

const errorMiddleware = (err, req, res, next) => {
    if (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

export default errorMiddleware;