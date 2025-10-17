import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Education from "./components/Education/educationPage";
import Projects from "./components/Projects/projectsPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/education',
        element: <Education/>
    },
    {
        path: '/projects',
        element: <Projects/>
    }
])
