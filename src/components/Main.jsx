import * as React from "react"

import { useLocation, useRoutes } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Home from "../pages/Home";
import About from "../pages/About";
import Consultation from "../pages/Consultation";
import Blog from "../pages/Blog";


function Main(props) {

    const element = useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/consultation",
            element: <Consultation />
        },
        {
            path: "/blog",
            element: <Blog />
        }


    ])

    const location = useLocation()

    if (!element) return null



    return (
        
        <AnimatePresence mode="wait">
            {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>

    

    )


}

export default Main