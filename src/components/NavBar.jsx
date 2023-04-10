import React from "react";
import { ReactDOM, useEffect, useState } from "react";
import { Search, ChevronDown } from "react-feather";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="NavBar">
                <h1 className="NavBarTitle">
                    Tigitaal
                </h1>

                <ul>
                    <li className="NBILI">
                        <input type="text" className="NavBarInput" placeholder="Search"/>
                        <svg viewBox="0 0 20 20" fill="none" width="20px" height="20px" role="img" className="NBI-abs-2">  
                            <path d="M16 .5H4A3.5 3.5 0 00.5 4v12A3.5 3.5 0 004 19.5h12a3.5 3.5 0 003.5-3.5V4A3.5 3.5 0 0016 .5zM6.5 16l7-12" stroke="#9ba1a6"></path>
                        </svg>
                        <div className="NBI-abs-1 NBI-abs"><Search /></div>
                        {/* <div className="NBI-abs-2 NBI-abs">/</div> */}
                        </li>

                    <li className="NavDropdownLI">
                        <Link to="/products">Products <ChevronDown /></Link>
                        <div className="NavDropdown">
                            <div className="NavDropdownContent">
                                <Link to="/products/publishing-platform">
                                    <div>
                                        <p>Publishing Platform</p>
                                        <p>Create and publish software</p>
                                    </div>
                                </Link>
                                <Link to="/products/dashboard">
                                    <div>
                                        <p>Dashboard</p>
                                        <p>View your products and analytics.</p>
                                    </div>
                                </Link>
                                <Link to="/products/advertising">
                                    <div>
                                        <p>Advertising</p>
                                        <p>Advertise and market your software</p>
                                    </div>
                                </Link>
                                <Link to="/products/dashboard">
                                    <div>
                                        <p>Studios</p>
                                        <p>Create studios and release the next great software</p>
                                    </div>
                                </Link>
                                <Link to="/products/analytics">
                                    <div>
                                        <p>Analytics <span>PRO</span></p>
                                        <p>Analyze your revenue and marketing</p>
                                    </div>
                                </Link>
                                <Link to="/products/dashboard">
                                    <div>
                                        <p>TigiPass+ <span>PRO</span></p>
                                        <p>Get all the latest software at a low cost subscription</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="NavDropdownLI">
                        <Link to="/developers">Developers <ChevronDown /></Link>
                        <div className="NavDropdown">
                            <div className="NavDropdownContent">
                                <Link to="/developers/tigitaal-api">
                                    <div>
                                        <p>Tigitaal API</p>
                                        <p>Take a look at what’s behind the scenes at Tigitaal</p>
                                    </div>
                                </Link>
                                <Link to="/developers/documentation">
                                    <div>
                                        <p>Documentation</p>
                                        <p>Learn how to interact with Tigitaal and its API</p>
                                    </div>
                                </Link>
                                <Link to="/careers">
                                    <div>
                                        <p>Careers</p>
                                        <p>View more information about working at Tigitaal</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="/community">Community</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/discover">Discover</Link>
                    </li>
                    <li>
                        <Link to="/signup" className="NavbarButtonA"><button>Sign Up</button></Link>
                    </li>
                    <li>
                        <Link to="/login">Log In</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;