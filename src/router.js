import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Login from "./pages/Login";




const router = createBrowserRouter([
    {
        path : "/",
        element : <Main/>
    },
    {
        path : "/login",
        element : <Login/>
    },
    {
        path : "/signup",
        element : <SignUp/>
    }
])

export default router