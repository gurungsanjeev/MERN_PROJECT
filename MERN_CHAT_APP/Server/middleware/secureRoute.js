import jwt from 'jsonwebtoken'

import User from '../models/user.model.js'


const secureRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(501).json({ message: "Not Authorized" });
        }
        const verified = jwt.verify(token, process.env.JWT_TOKEN);

        if (!verified) {
            return res.status(403).json({ message: "Invalid token" })
        }
        const user = await User.findById(verified.userId).select("-password");

        if (!user) {
            return res.status(501).json({ message: "User not found" })
        }
        req.user = user;
        next();

    } catch (error) {
        res.status(501).json({ message: " internal server errror" })
    }
}
export default secureRoute;