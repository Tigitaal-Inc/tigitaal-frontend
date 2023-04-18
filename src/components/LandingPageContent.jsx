import React from "react";
import { ReactDOM, useEffect, useState } from "react";
import {  } from "react-feather";
import { Link } from "react-router-dom";

// Component Imports
import HeroSection from "./LandingPageComponents/HeroSection";
import MobilePromoSection from "./LandingPageComponents/MobilePromoSection";

import { ReactLenis } from "@studio-freight/react-lenis";

const LandingPageContent = () => {
    return (
        <>
            <ReactLenis root options={{ duration: '1' }}>
            <HeroSection />
            {/* <MobilePromoSection /> */}
            </ReactLenis>
        </>
    );
}

export default LandingPageContent;