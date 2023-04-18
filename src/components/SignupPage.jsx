import React from "react";
import { ReactDOM, useEffect, useState } from "react";
import {  } from "react-feather";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';

import SignupPageContent from "./SignupPageContent";
import NavBar from "./NavBar";
import HamburgerMenu from "./HamburgerMenu";

import { useMediaQuery } from "./MediaQueryMethod.jsx";

const SignupPage = () => {

    let isPageWide = useMediaQuery('(min-width: 1131px)')

    const [hamburgerActivated, setHamburgerActivated] = useState(false);

    function updateHamburgerState(state) {
        setHamburgerActivated(state);
    }

    return (
        <>
        <AnimatePresence  key="hello1">
        <NavBar updatehamburgerstate={updateHamburgerState} hasborder={true}/>
        <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                >
        {isPageWide ? <SignupPageContent /> : hamburgerActivated ? <HamburgerMenu /> : <SignupPageContent />}
        </motion.div>
        </AnimatePresence>
        </>
    );
}

export default SignupPage;