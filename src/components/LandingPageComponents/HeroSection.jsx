import React from "react";
import { ReactDOM, useEffect, useState } from "react";
import {  } from "react-feather";
import { Link } from "react-router-dom";

// Images
import HeroIllustration from "./HeroSectionIllustration.svg"


const HeroSection = () => {
    return (
        <>
            <section className="HeroSection">
                <div className="HeroSectionBlurs">
                    <div className="blur blur1">

                    </div>
                    <div className="blur blur2">

                    </div>
                </div>
                <div className="HeroText">
                    <h1>Create. Host. Play.</h1>
                    <h1>Do it the Tigitaal way.</h1>
                    <p>Create and publish games to a large audience, and play games created by other studios. Tigitaal creates an experience that is impossible to forget.</p>
                    <Link to="/signup"><button>Get Started</button></Link>
                </div>
                <img src={HeroIllustration} alt="Tigitaal-Dashboard-Illustration" />
            </section>
        </>
    );
}

export default HeroSection;