import { createBrowserRouter } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "../pages/home/Home.jsx";
import AboutMe from "../pages/aboutme/AboutMe.jsx"
import Resume from "../pages/resume/Resume.jsx";
import OrangeDigitalCenter from "../pages/detailedpages/orange/Orange.jsx";
import Madxtreme from "../pages/detailedpages/madxtreme/Madxtreme.jsx"
import Atuspies from "../pages/detailedpages/atuspies/Atuspies.jsx"
import Catchacoder from "../pages/detailedpages/catchacoder/Catchacoder.jsx"
import Sportforall from "../pages/detailedpages/sportforall/Sportforall.jsx"

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
                path: "/orangedigitalcenter",
                element: <OrangeDigitalCenter />
            },
            {
                path: "/madxtreme",
                element: <Madxtreme />
            },
            {
                path: "/atuspies",
                element: <Atuspies />
            },
            {
                path: "/catchacoder",
                element: <Catchacoder />
            },
            {
                path: "/sportforall",
                element: <Sportforall />
            }
        ],
    },
]);

export default router;
