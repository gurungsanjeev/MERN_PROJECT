import User from "../models/user.models.js";
import bcrypt from "bcryptjs"
import createTokenAndSaveCookie from '../jwt/generateToken.js'

export const signup = async (req, res) => {
    try {
        let { name, email, password, confirmpassword } = req.body;

        /// converting the password into string
        password = String(password);

        // converting the confirm password into string
        confirmpassword = String(confirmpassword);

        // checking if the password match with the confirm password or not
        if (password !== confirmpassword) {
            return res.status(400).json({ message: "password doesnot match" })
        }
        //checking the if it contain existing user or not
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "user already exits" })
        }

        console.log(typeof password);
        // hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);



        // creating / registration for  the new user 
        /// User is the usermodel schema
        const newUser = await new User({
            name,
            email,
            password: hashedPassword,
        });


        await newUser.save()
        if (newUser) {
            createTokenAndSaveCookie(newUser._id, res);
            res.status(201).json({ message: "user register successfully", newUser })

        }



    } catch (error) {
        console.log("error in user Controller" + error)
    }
}


export const login = async (req, res) => {
    let { email, password } = req.body;
    try {
        //converting the password into the string
        password = String(password);

        const user = await User.findOne({ email })
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "invalid User or password" });
        }
        createTokenAndSaveCookie(user._id, res);
        res.status(201).json({
            message: " user logged in successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "server error" })

    }
};



export const logout = async (req, res) => {
    try {
        res.clearCookie('jwt')
        res.status(200).json({ message: "user logged out successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "server error" })

    }
}

