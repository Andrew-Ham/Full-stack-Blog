import { createContext, useState, useEffect } from "react"
import axios from 'axios'

/*
Why do I need to use createContext?
-I will need to use user information in multiple components such as the navbar, write page, post page etc.
-So to do this I can store the user info in the AuthenticationContext. To use this if we create a context provider and wrap our application with the provider we 
can use the user state anywhere in our application. 

*/

export const AuthenticationContext = createContext()

// children represents our components we want to wrap with the AuthenticationContextProvider. Since we want to use the user state anywhere in our application, our app component
//<App /> will be the child!
export const AuthenticationContextProvider = ({children}) => {
    //I create a state for currentUser. I first check if there is user in localStorage meaning a user is logged in. 
    //Note : Everything in localStorage is a string. I want to transform into object thus use JSON.parse
    
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async (inputs) => {
        const res = await axios.post("/authentication/login", inputs);
        setCurrentUser(res.data);
    }

    const logout = async (inputs) => {
        await axios.post("/authentication/logout");
        setCurrentUser(null);
    }

//I created a state for currentUser. But how can I change/update the localStorage everytime user is changed (e.g if user logout and new user logs in). I use useEffect for this
//Whenever I change currentUser, I update localStorage through setItem. 
    useEffect(()=> {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    //Value needs to be in double brackets as it is a prop.
    //We pass currentUser (state) to value as well as our functions login/logout. 
    //This means I can use the user state and the functions anywhere in our app (note : children is our <App> component).
    return <AuthenticationContext.Provider value={{currentUser, login, logout}}>{children}</AuthenticationContext.Provider>;

}
