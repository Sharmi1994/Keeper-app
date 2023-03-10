import React, { useState } from "react";

import Footer from "./footer";

import axios from "axios";

function Signup() {
  const [click, setClick] = useState(false);
  function openDiv() {
    setClick(!click);
  }
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const handleSubmit = async function (event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8082", {
        fname,
        lname,
      });
      console.log(response.data);
      setfname("");
      setlname("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <div className="signin">
        <nav className="navbar navbar-brand navbar-expand-lg ">
          <h1 className="">NetFlix</h1>
        </nav>

        <div className="container signcontain">
          <div className="row">
            <h2 className="signhead">Sign up</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row email ">
              <input
                type="text"
                value={fname}
                onChange={function (event) {
                  setfname(event.target.value);
                }}
                placeholder="First Name"
                size="20"
              />

              <input
                type="text"
                value={lname}
                onChange={function (event) {
                  setlname(event.target.value);
                }}
                placeholder="Last Name"
                size="20"
              />
              <input
                type="Emailaddress"
                placeholder="Email address"
                size="20"
              />
            </div>
            <div className="row email ">
              <input type="password" placeholder="Enter Password" size="40" />
            </div>
            <div className="row email ">
              <input
                type="password"
                placeholder="Re enter password"
                size="40"
              />
            </div>
            <div className="row email">
              <button type="submit" className="btn-lg btn-danger">
                Sign up
              </button>
            </div>
          </form>
          <div className="row email">
            <div className="col">
              {" "}
              <input type="checkbox" value="lsRememberMe" id="rememberMe" />
              <label>Remember me</label>
            </div>
            <div className="col">
              {" "}
              <p className="needhelp">Need help?</p>
            </div>
          </div>

          <div className="row newto">
            <p className="googlecap">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <span className="link" onClick={openDiv}>
                Learn more.
              </span>{" "}
            </p>
            {click && (
              <p className="googlecap">
                The information collected by Google reCAPTCHA is subject to the
                Google{" "}
                <a className="link" href="https://policies.google.com/privacy">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a className="link" href="https://policies.google.com/terms">
                  Terms of Service
                </a>
                , and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalized advertising by Google).
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Signup;
