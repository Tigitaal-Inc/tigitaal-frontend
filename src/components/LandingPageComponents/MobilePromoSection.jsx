import React from "react";
import { ReactDOM, useEffect, useState } from "react";
import {  } from "react-feather";
import { Link } from "react-router-dom";

// Images
import LandingIpadIllustration from "./landing-ipad-illustration.png"
import LandingMobileIllustration from "./landing-mobile-illustration.png"
import LandingCombined from "./landing-combined.png";

const MobilePromoSection = () => {
    return (
        <>
        <section className="MobilePromoSection">
            <div className="MPS-Text">
                <p className="MPS-Text-One">
                    Lorem Ipsum Sit
                </p>
                <h1 className="MPS-Text-Two">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <div className="MPS-Text-Wrap">
                    <p className="MPS-Text-Wrap-One">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, debitis voluptatibus cum in ex provident, quaerat deserunt iure omnis recusandae nihil? Facilis illo eum dolorem. In possimus sint perferendis sunt.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, debitis voluptatibus cum in ex provident, quaerat deserunt iure omnis recusandae nihil? <span> Facilis illo eum dolorem. In possimus sint perferendis sunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, debitis </span> voluptatibus cum in ex provident, quaerat deserunt iure omnis recusandae nihil? Facilis illo eum dolorem. In possimus sint perferendis sunt.
                    </p>
                    <p className="MPS-Text-Wrap-Two">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, debitis voluptatibus cum in ex provident. Lorem ipsum dolor sit, amet consectetur <span> adipisicing elit. Tempore, debitis voluptatibus cum in ex provident, quaerat deserunt</span> iure omnis recusandae nihil? Facilis illo eum dolorem. In possimus sint perferendis sunt.
                    </p>
                </div>
                <Link to="/signup"><button>Get Started</button></Link>
                <div className="MPS-Img-Wrap">
                    <img src={LandingMobileIllustration} alt="LandingMobileIllustration" className="img1"/>
                    <img src={LandingIpadIllustration} alt="LandingIpadIllustration"  className="img1"/>
                    <img src={LandingCombined} alt="LandingCombinedIllustration"  className="img2"/>
                    
                </div>
            </div>
        </section>
        </>
    );
}


export default MobilePromoSection;