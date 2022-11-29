import express from "express"
import {register, login, logout} from "../controllers/authentication.js"

/* 
Here I am just calling the functions that are written in our controllers!
So instead of having multiple api operations like below,

        router.get("/test", (req,res) => {
            res.json("This is post")
        })

I can have the actual logic in the controller file then just call the controller operation since i export it. It will look like below

        router.get("/test", addPost)

And in the post.js file (controller) I will have 

        export const addPost = (req,res) => {
            res.json("from controller")
        }
*/

const router = express.Router()
router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)



export default router