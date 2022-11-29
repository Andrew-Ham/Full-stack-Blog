import express from "express"
//To use import statement like above ^, in package.json of this folder we need to make sure ->  "type": "module"   
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authenticationRoutes from "./routes/authentication.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())

/* 
My backend structure

All the business logic (actual API operations) are in the controllers.
The controllers get called in the routes.
Then the routes get exported here in the index.js file
*/
app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)
app.use("/api/authentication", authenticationRoutes)



//To run our application we need to listen in a port number like below.
app.listen(8800, () => {
    console.log("connected")
})