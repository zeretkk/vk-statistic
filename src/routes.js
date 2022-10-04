import { createBrowserRouter } from "react-router-dom"
import Loader from './components/Loader'
import Main from './components/Main'
import Profile from "./components/Profile";


export const router = createBrowserRouter( [
    {
        path: '/',
        element: <Main/>
    },
    {
        path:'/load',
        element: <Loader/>
    },
    {
        path:'/profile',
        element: <Profile/>
    }
])