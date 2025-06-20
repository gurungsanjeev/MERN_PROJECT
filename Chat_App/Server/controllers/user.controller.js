import User from "../models/user.models.js";
import bcrypt from "bcryptjs"

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
            .then(() => {
                res.status(201).json({ message: "user register successfully" })
            })

    } catch (error) {
        console.log("error in user Controller" + error)
    }
}