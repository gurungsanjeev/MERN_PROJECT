import UserModel from "../Models/User.model.js";
import bcrypt from 'bcrypt'
// import createTokenAndSaveCookie from '../jwt/generateToken.js'
import createTokenAndSaveCookie from "../jwt/generateToken.js";



export const signup = async (req, res) => {
    try {

        const { name, email, password, confirmpassword } = req.body;
        if (password !== confirmpassword) {
            return res.status(400).json({ message: "password donot match" })
        }
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "Email already exist" });
        }

/// Hashing the password
const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await new UserModel({
            name,
            email,
            password:hashedPassword,

        })
       await newUser.save()
       if(newUser){
        // passing the _id from the database id
        createTokenAndSaveCookie(newUser._id, res);
           res.status(201).json({ message: "success" })
       }
       
           
            
    }
    catch(err){
        console.log("ERROR in user controller: ", err)
    }
}