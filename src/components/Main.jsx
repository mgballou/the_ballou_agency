import * as React from "react"

import { useLocation, useRoutes } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";


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
            path:"/services",
            element: <Services />
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