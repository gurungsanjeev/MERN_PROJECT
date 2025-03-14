const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const UserDataModel = require('./models/UserData')


const app = express()
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://localhost:127.0.0.1:27017/userDetails")

mongoose.connect("mongodb://127.0.0.1:27017/userDetails", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// app.post('/login', (req, res) => {
//   const {email, password} = req.body;
//   UserDataModel.findOne({ email: email })
//     .then(user => {
//       if (user) {
//         if (user.password === password) {
//           res.json("Success")
//         } else {
//           res.json("Password didn't match")
//         }
//       } else {
//         res.json("NO record was found")
//       }
//     })
// })

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserDataModel.findOne({ email: email })
    .then(user => {
      if (user) {
        // Use bcrypt to compare the plain text password with the hashed one
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            return res.status(500).json({ message: "Error comparing passwords" });
          }
          if (isMatch) {
            res.json("Success");
          } else {
            res.json("Password didn't match");
          }
        });
      } else {
        res.json("No record was found");
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error logging in", error: err });
    });
});











// app.post('/signup', async(req, res) => {
//   UserDataModel.create(req.body)
//     .then(userDetails => res.json(userDetails))
//     .catch(err => res.json(err))
// })


const bcrypt = require("bcryptjs");

app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Save the new user with the hashed password
    const userDetails = await UserDataModel.create({ email, password: hashedPassword });
    res.json(userDetails);
  } catch (err) {
    res.json(err);
  }
});







app.listen(3001, () => {
  console.log("server is running")
})



/******** This code is re build using chatgpt */


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcryptjs"); // For password hashing
// const UserDataModel = require("./models/UserData");

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/userDetails", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("Connected to MongoDB"))
// .catch(err => console.error("MongoDB connection error:", err));

// // ✅ Secure Signup (Hash Password Before Saving)
// app.post("/signup", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if email is already registered
//     const existingUser = await UserDataModel.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = await UserDataModel.create({ email, password: hashedPassword });

//     res.status(201).json({ message: "User registered successfully", user: newUser });
//   } catch (error) {
//     res.status(500).json({ message: "Error registering user", error });
//   }
// });

// // ✅ Secure Login (Compare Hashed Password)
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await UserDataModel.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: "No record found" });
//     }

//     // Compare hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Password didn't match" });
      
//     }

//     res.status(200).json({ message: "Success" });
    
    
//   } catch (error) {
//     res.status(500).json({ message: "Error logging in", error });
//   }
// });

// // Start Server
// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });


