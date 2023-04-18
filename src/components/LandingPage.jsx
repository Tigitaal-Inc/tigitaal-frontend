import React from "react";
import { ReactDOM, useEffect, useState } from "react";
import {  } from "react-feather";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';


// Stylesheets
import "../scss/LandingPage.scss"

// Component Imports
import NavBar from "./NavBar";
import LandingPageContent from "./LandingPageContent";
import HamburgerMenu from "./HamburgerMenu";


// Methods
import { useMediaQuery } from "./MediaQueryMethod.jsx";
  

const LandingPage = () => {

    let isPageWide = useMediaQuery('(min-width: 1131px)')

    const [hamburgerActivated, setHamburgerActivated] = useState(false);

    function updateHamburgerState(state) {
        setHamburgerActivated(state);
    }


    return (
        <>  
        <AnimatePresence key="hello">
            <NavBar updatehamburgerstate={updateHamburgerState}/>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                >
            {isPageWide ?<LandingPageContent /> : hamburgerActivated ? <HamburgerMenu /> : <LandingPageContent />}
            </motion.div>
        </AnimatePresence>
        </>
    );
}

export default LandingPage;