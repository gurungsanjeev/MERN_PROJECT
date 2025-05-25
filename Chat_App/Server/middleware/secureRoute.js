import jwt from "jsonwebtoken";
import UserModel from "../Models/User.model.js";


const secureRoute = async (req,res,next)=>{
    try{
const token = req.cookies.jwt;
if(!token){
    return res.status(401).json({message: "Not authorized"});
}
const verified = jwt.verify(token, process.env.JWT_TOKEN);
if(!verified) {
    return res.status(403).json({message: "Invalid Token"});

}
const user = await UserModel.findById(verified.userId).select("-password");
if(!user){
    return res.status(404).json({message: "user not found"});
}
req.user = user;
next();

    }catch(error){
        console.log(error)
    }
}

export default secureRoute;