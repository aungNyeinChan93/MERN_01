import User from "../models/User.js";
import { bcrypt } from "../utils/helper.js";

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
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select(['name', 'email', 'password']).lean();

        if (!user || !(bcrypt.compare(password, user.password))) {
            res.status(400);
            return next(new Error('Password is not correct!'))
        }

        res.status(200).json({
            mess: 'success',
            result: user
        })
    }
}

export default authController;