import {database} from "../database.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = (req,res) => {
    //check if user exists already
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    database.query(q, [req.body.email, req.body.username], (err,data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exists!");

        //Hash password with bcryptjs and create user (Password should be hashed in our database for privacy practises!)
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
        const values = [
            req.body.username, req.body.email, hash,
        ];
        database.query(q,[values], (err,data) => {
            if(err) return res.json(err);
            return res.status(200).json("User has been created!");

        })
    })
}

export const login = (req,res) => {
    //Check if user exists or not
    const q = "SELECT * FROM users WHERE username = ?"
    database.query(q, req.body.username, (err,data) => {
        if(err) return res.json(err);
        if(data.length === 0) return res.status(404).json("Username not found!");

        //Check if user password is correct
        //compareSync 1st parameter is what user types in and 2nd parameter is the password in our DB.
        //Remember 'data' by default returns an array so we need to use index to get a user and then its password. 
        const passwordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        if(!passwordCorrect) return res.status(400).json("Incorrect username or password!")
        
        //Now that user details match they should log in. However we should not send our user info or store it in local storage (Inspect -> Devtools -> application)
        //We will instead use JWT (JsonWebToken). This is important because after our authentication the user can update/edit/delete posts but in our application we 
        //must be sure that the post belongs to the user (one user shouldn't be able to delete other user posts unless administrator obviously).

        //The token below with the user ID will be stored in the cookie. When user tries to delete post the application will check the json webtoken.
        //Since it includes user id application will check if token user id is the same as the user id in post (our foreign key in database). 

        const token = jwt.sign({id:data[0].id}, "jwtkey")

        //Because with cookie we are returning user data, we do not want to return the password even though it is encrypted. It is NOT good practice! 
        //This is why below we are seperating password away from the other variables so we only pass other in  ->   status(200).json(other)
        const {password, ...other} = data[0]

        //Below we return the user info above as cookie
        //httpOnly is a cookieOption for security. It means any script in browser and application cannot reach the cookie directly. We only use cookie for api requests
        res.cookie("access_token", token, {
            httpOnly:true
        }).status(200).json(other)

    })
}

export const logout = (req,res) => {
    res.clearCookie("access_token", {
        sameSite:"none", 
        secure:true
    }).status(200).json("User has been logged out!")
}