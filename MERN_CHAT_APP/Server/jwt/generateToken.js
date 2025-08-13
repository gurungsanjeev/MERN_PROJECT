import jwt from "jsonwebtoken"

const createTokenAndSaveCookie = (userId, res) => {

    // for jwt_token use this command: openssl rand -base64 32 in terminal bash and save it into the .env file 

    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
        expiresIn: "5d",

    });

    res.cookie("jwt", token, {
        httpOnly: true, /// prevent from xss attack
        secure: true,
        sameSite: "strict", // prevent from the csrf
    });



}
export default createTokenAndSaveCookie;