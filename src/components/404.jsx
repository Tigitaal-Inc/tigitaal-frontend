import React from "react";
import { ReactDOM, useEffect, useState } from "react";
import {  } from "react-feather";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';

import Typed from "react-typed"

import NavBar from "./NavBar";
import HamburgerMenu from "./HamburgerMenu";

import { useMediaQuery } from "./MediaQueryMethod.jsx";


function NotFoundContent() {
    return (
        <>
        <style>
            {
                `
                .NotFoundSection h1{
                    margin: 0 !important;
                    margin-top: 5% !important;
                    margin-bottom: 3% !important;
                    font-size: 8rem;
                }

                .NotFoundSection {
                    display: flex;
                    justify-content: flex-start;
                    flex-direction: column;
                    align-items: center;
                }

                .NotFoundSection * {
                    color: white;
                }

                .typed-cursor {
                    display: none !important;
                }
                .NotFoundSection span {
                    display: block;
                    margin: 5px 0;
                    font-size: 1.2rem;
                    font-weight: 600;
                    font-family: 'Inter', sans-serif;
                    opacity: 0.8;
                    z-index: 0;
                }
                .NotFoundSection span span {
                    opacity: 0.3;
                }
                .NFSSpan2 span {
                    opacity: 0.5 !important;
                }
                `
            }
        </style>
        <section className="NotFoundSection" style={{ minHeight: 'calc(100dvh - 80px)', background: '#151718' }}>
            <h1>404</h1>
            <Typed
                    strings={['Wait! How did you find the secret cha...']}
                    typeSpeed={45}
                    startDelay={100}
                />
                <Typed
                    strings={['HEY! They cant know about this!']}
                    typeSpeed={45}
                    startDelay={3300}
                    className="NFSSpan2"
                />

<Typed
                    strings={['Sorry! What secret ch..']}
                    typeSpeed={45}
                    startDelay={5700}
                />
                <Typed
                    strings={['Oh, be quiet! User, there is nothing here! Go back, please.']}
                    typeSpeed={45}
                    startDelay={7700}
                    className="NFSSpan2"
                />
        </section>
        </>
    );
}

const NotFound = () => {

    let isPageWide = useMediaQuery('(min-width: 1131px)')

    const [hamburgerActivated, setHamburgerActivated] = useState(false);

    function updateHamburgerState(state) {
        setHamburgerActivated(state);
    }

    return (
        <>
        <AnimatePresence   key="hello2">
         <NavBar  updatehamburgerstate={updateHamburgerState}/>
         <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                >
         {isPageWide ? <NotFoundContent />: hamburgerActivated ? <HamburgerMenu /> : <NotFoundContent />}
         </motion.div>
         </AnimatePresence>
        </>
    );
}


export default NotFound;