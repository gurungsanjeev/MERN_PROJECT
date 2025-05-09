// multer for file handling
import multer from "multer";
import UserModel from "../Models/User.js";
import path from "path";
import bcrypt from 'bcrypt';

// Define the storage for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // save to public/images
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

export const upload = multer({ storage: storage });

// Register Controller
async function Register(req, res) {
  try {
    const { username, password } = req.body;
    const file = req.file.filename;

    const userExist = await UserModel.findOne({ username });
    if (userExist) {
      return res.status(400).json({ msg: "user already existed" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      password: hashpassword,
      image: file
    });

    await newUser.save();

    return res.status(200).json({ msg: "success" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error: " + error.message });
  }
}

export default Register;
