import User from "../models/User.js";
import { bcrypt, JWT } from "../utils/helper.js";


const authController = {
    register: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;
            const hashPassword = bcrypt.hash(password, 10);
            const user = await User.create({ name, email, password: hashPassword });
            if (!user) {
                return next(new Error('register fail!'))
            }
            return res.status(201).json({
                mess: 'success',
                result: user
            })
        } catch (error) {
            return next(error)
        }
    },
    login: async (req, res, next) => {
        // console.log(req.token);
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email }).select(['name', 'email', 'password']).lean();
            if (!user || !(bcrypt.compare(password, user.password))) {
                res.status(400);
                return next(new Error('Wrong Crendential!'))
            }
            const token = JWT.genToken({ name: user.name, email: user.email, id: user._id }, process.env.SECRECT_KEY);
            res.cookie('token', token, {
                maxAge: 1000 * 60 * 360,
                httpOnly: true
            })
            user.password = ''
            res.status(200).json({
                mess: 'success',
                result: { ...user, token },
            })
        } catch (error) {
            return next(error)
        }
    },
    logout: async (req, res, next) => {
        const { token } = req.cookies;
        console.log(token);

        if (token) {
            res.clearCookie('token');
            res.status.json({ mess: 'success' })
        }
        res.json({})
    }
}


export default authController;

