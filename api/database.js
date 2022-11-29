import mysql2 from "mysql2"

export const database = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"throwAway123",
    database:"blog"
})