import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import {userRouter} from "./routes/users.js"

const uri = "mongodb+srv://jaigupta:Vqa0v1Fc8DgqBwSG@cluster0.3w4f76t.mongodb.net/game_test_qa?retryWrites=true&w=majority"

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
}))
app.use("/win", userRouter)



mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.listen(3001, ()=>{
    console.log("Server Started");
})