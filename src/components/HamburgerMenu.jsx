import React from "react";
import { ReactDOM, useEffect, useState } from "react";
import { Search, ChevronRight } from "react-feather";
import { Link } from "react-router-dom";

import "../scss/Hamburger.scss"

const HamburgerMenu = () => {
    return (
        <>
            <section className="Hamburger">
            <div className="HBI">
                <input type="text" className="HamBurgerInput" placeholder="Search"/>
                <div className="NBI-abs-1 NBI-abs"><Search /></div>
             </div>
             <div className="HBDivider" style={{ marginBottom: '5px' }}></div>
             <div className="HBLinks">
                <Link to="/products"><p>Products</p> <ChevronRight /></Link>
                <Link to="/developers"><p>Developers</p> <ChevronRight /></Link>
                <Link to="/tools"><p>Tools</p> <ChevronRight /></Link>
                <Link to="/pricing"><p>Pricing</p> <ChevronRight /></Link>
             </div>
             <div className="HBDivider" style={{ marginTop: '5px'} }></div>
             <Link to="/signup"><button className="HBBF">Sign Up</button></Link>
             <Link to="/login"><button>Log In</button></Link>
            </section>
        </>
    );
}

export default HamburgerMenu;