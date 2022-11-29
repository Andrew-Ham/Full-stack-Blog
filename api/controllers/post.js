//Instead of adding the api requests in the routes (such as posts.js/users.js/authentication.js) we are going to write them in the controller and then just call 
//the operations in the routes.
export const addPost = (req,res) => {
    res.json("from controller")
}