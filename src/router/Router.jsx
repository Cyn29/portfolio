import { createBrowserRouter } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "../pages/home/Home.jsx";
import AboutMe from "../pages/aboutme/AboutMe.jsx"
import Resume from "../pages/resume/Resume.jsx";
import OrangePage from "../pages/orange/Orange.jsx";
import MadxtremeCarousel from "../pages/madxtreme/Madxtreme.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/aboutme",
                element: <AboutMe />
            },
            {
                path: "/resume",
                element: <Resume />
            },
            {
                path: "/orangepage",
                element: <OrangePage />
            },
            {
                path: "/madxtremepage",
                element: <MadxtremeCarousel />
            }
        ],
    },
]);

export default router;
