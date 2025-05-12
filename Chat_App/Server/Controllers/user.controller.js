import UserModel from "../Models/User.model.js";
import bcrypt from 'bcrypt'
// import createTokenAndSaveCookie from '../jwt/generateToken.js'
import createTokenAndSaveCookie from "../jwt/generateToken.js";



export const signup = async (req, res) => {
    try {

        const { name, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "password donot match" })
        }
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(409).json({ message: "Email already exist" });
        }

        /// Hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await new UserModel({
            name,
            email,
            password: hashedPassword,

        })
        await newUser.save()
        if (newUser) {
            // passing the _id from the database id
            createTokenAndSaveCookie(newUser._id, res);
            res.status(201)
                .json({
                    message: "success", user: {
                        _id: newUser._id,
                        name: newUser.name,
                        email: newUser.email
                    },
                })
        }



    }
    catch (err) {
        console.log("ERROR in user controller signup: ", err)
    }


}


export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        /// user is from data base
        const user = await UserModel.findOne({ email })
        const isMatch = await bcrypt.compare(password, user.password);
        // if(user){
        //     isMatch !== password
        //     .then(()=>{
        //         return res.status(404).json({ message: "Invalid user or password" })
        //     })
        // }
        if (!user || !isMatch) {
            return res.status(404).json({ message: "Invalid user or password" })
        }
        createTokenAndSaveCookie(user._id, res);
        res.status(201).json({
            message: "user logged in sucessfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            },
        })
    }
    catch (err) {
        console.log("ERROR in user controller login: ", err)
    }

}


export const logout = async (req, res) => {
    try {
        res.clearCookie('jwt')
        res.status(200).json({ message: "User logged out successfully" })
    }
    catch (err) {
        res.status(404).json({ message: "Errror", err })
    }
}