import { Router } from "express";

const testRouter = Router();

testRouter.get('/create-cookie', (req, res, next) => {
    res.cookie('cookie_name', 'cookie_test_value_1', {
        maxAge: 1000 * 60 * 15,
        httpOnly: true,
    }).json({
        mess: 'cookie save!'
    })
});

testRouter.get('/read-cookie', (req, res, next) => {
    const result = req.cookies.cookie_name;
    res.json({ mess: result })
})

testRouter.get('/clear-cookie', (req, res, next) => {
    res.clearCookie('cookie_name');
    res.json({ mess: 'cookie have been clear!' })
})

export default testRouter;