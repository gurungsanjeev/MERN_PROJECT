import User from "../models/user.model.js";
import createTokenAndSaveCookie from '../jwt/generateToken.js'
import bcrypt from "bcryptjs"


export const signup = async (req, res) => {
    try {


        let { name, email, password, confirmPassword } = req.body;

        //// converting number into string

        password = String(password);


        /// converting confirm password into string

        confirmPassword = String(confirmPassword);





        // comparing password and confirmpassword
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "password doesnot match" });
        }

        // checking if the user exist already or not
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "Email already exist" });
        }

        // hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await new User({
            name,
            email,
            password: hashedPassword,
            // confirmpassword: hashedPassword
        });
        await newUser.save()
        if (newUser) {
            createTokenAndSaveCookie(newUser._id, res);// _id is taken from the database 
            res.status(201).json({
                message: "User register successfully", user: {
                    _id: newUser._id,
                    name: newUser.name,
                    email: newUser.email
                }
            });
        }
    } catch (error) {
        console.log("Error in user controller", error);
        return res.status(500).json({ message: "Server error" })

    }
}



export const login = async (req, res) => {
    let { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(404).json({ message: "User doesnot exist" })
        }
        password = String(password);
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(404).json({ message: "Incorrect password" })
        }

        createTokenAndSaveCookie(user._id, res);
        res.status(201).json({
            message: "user logged in successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        console.log("Error in user controller (login)", error);

        res.status(500).json({ message: "Server error" })

    }

}


export const logout = async (req, res) => {
    try {

        res.clearCookie('jwt');
        res.status(201).json({ message: "Logout successfully" });
    } catch (error) {
        console.log("Error in user controller (logout)", error);

        res.status(500).json({ message: "Server error" })

    }
}