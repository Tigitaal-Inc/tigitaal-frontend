import React from "react";
import { ReactDOM, useEffect, useState } from "react";
import {  } from "react-feather";
import { Link } from "react-router-dom";



const SignupPageContent = () => {

    const [handle, setHandle] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [btnActive, setBtnActive] = useState(false);

    const [page2, setPage2] = useState(false)


    // Conditional form validation
    useEffect(() => {
        if (email) {
            if (name) {
                if (password) {
                    if (handle) {
                        setBtnActive(true)
                    }else {
                        setBtnActive(false)
                    }
                }else {
                    setBtnActive(false)
                }
            }else {
                setBtnActive(false)
            }
        } else {
            setBtnActive(false)
        }
    }, [email, name, password, handle])



    // Email Validation regex method
    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
    
    const updateEmail = (email) => {
        if (validateEmail(email)) {
            setEmail(email);
        } else {
            setEmail(null)
        }
    }


    function signUp() {
        // Does sign up stuff
        // If Successfull:

        setPage2(true);   
    }


    return (
        <>
            <main className="SignUpPage">
                <div className="SignUpBox">
                    {!page2 ? <><h1>Welcome to Tigitaal! <span>👋</span></h1>
                    <p className="SUBP">Fill out some information to get started.</p></> : ""}
                    <div className="SignUpBoxInner">
                        {!page2 ? <><div>
                            <p>Email</p>
                            <input type="email"  onChange={e => updateEmail(e.target.value)}/>
                        </div>
                        <div>
                            <p>Name</p>
                            <input type="text"  onChange={e => setName(e.target.value)}/>
                        </div>
                        <div>
                            <p>Handle {handle ? <span>@{handle}</span> : ""}</p>
                            <input type="text" maxLength="20" onChange={e => setHandle(e.target.value)}/>
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="password"  onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <button disabled={!btnActive} onClick={e => signUp()}>Sign Up</button></> : <><h1 className="confh1">You're nearly done!</h1>
                        <p className="confp">We have just sent a confirmation email to <span>{email}</span>. Check your inbox, and click on the magic link! You will be directed to the dashboard of your brand new Tigitaal account. Happy Hacking! </p></>}
                    </div>
                </div>
            </main>
        </>
    );
}

export default SignupPageContent;