import multer from "multer"
import UserModel from "../Models/User"
import path from "path"

const storage = multer.diskStorage({
    destination: (req, res, cb) => {

        cb(null, 'public/images')
    },
    filename: (req, res, cb) => {
        cb(
            null, fileURLToPath.fieldname + "_" + Date.now() + path.extname(File.originalname)
        )
    }
})


const upload = multer({
    storage: storage
})


function Register(req, res) {
    console.log(req.body)


}

export default Register