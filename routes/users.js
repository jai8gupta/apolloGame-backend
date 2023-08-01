import express from 'express'
import { UserModel } from '../models/UserSchema.js'


const router = express.Router()

router.post("/", async (req, res) => {
    const {username, number, score} = req.body;
    if (number && score && username) {
        const user = await UserModel.findOne({ number })
        console.log(user);
        if (!user) {
            const testUser = new UserModel({
                name: username,
                number: number,
                score: score,
                lastPlayed: Date.now(),
            })
            await testUser.save()
            res.json({
                message: "Saved Successfully"
            })
        }
        else {
            res.json({
                message: "User Exists Already !!!"
            })
        }
        
    }
    else {
        res.json({
            message: "Some Error Occurred, Try Again Later"
        })
    }
    
})


export {router as userRouter}