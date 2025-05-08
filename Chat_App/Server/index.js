import express from 'express'
import cors from 'cors'
import Connect from './db/connection.js';



const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, ()=>{
    Connect()
    console.log("server is running!")
})