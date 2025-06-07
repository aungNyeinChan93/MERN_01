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
    }
}

export default authController;