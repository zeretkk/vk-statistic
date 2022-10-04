import { createBrowserRouter } from "react-router-dom"
// import App from "./App"
import Loader from './components/Loader'
import Main from './components/Main'


export const router = createBrowserRouter( [
    {
        path: '/',
        element: <Main/>
    },
    {
        path:'/load',
        element: <Loader/>
    }
])