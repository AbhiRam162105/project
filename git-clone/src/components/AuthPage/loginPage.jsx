import React from "react";

import logo from "./github-mark-white.svg";
import "./loginPage.css";

function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-logo-container">
        <img className="logo-login" src={logo} alt="" />
      </div>

      <div className="login-box-wrapper">
        <div className="login-heading">
          <h1>Add an account</h1>
        </div>
        <div className="login-box">
          <div>
            <label className="label">Email address</label>
            <input
              autoComplete="off"
              name="Email"
              id="Email"
              className="input"
              type="email"
            />
          </div>
          <div className="div">
            <label className="label">Password</label>
            <input
              autoComplete="off"
              name="Email"
              id="Email"
              className="input"
              type="password"
            />
          </div>

          <div className="submit-btn">
            <button className="submit-btn" type="submit">
              Sign in
            </button>
          </div>
        </div>
      </div>

      <div className="passkey-signin">
        <p className="passkey">Sign in with a passkey</p>

        <p className="create-account">
          Create an account ? <span className="signup">Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
