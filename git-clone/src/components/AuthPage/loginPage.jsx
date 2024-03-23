import React from "react";
import { PageHeader } from "@primer/react/drafts";
import logo from "./github-mark-white.svg";
import "./loginPage.css";
import { Box, Button } from "@primer/react";

function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-logo-container">
        <img className="logo-login" src={logo} alt="" />
      </div>

      <div className="login-box-wrapper">
        <div className="login-heading">
          <Box
            sx={{
              padding: 1,
            }}
          >
            <PageHeader>
              <PageHeader.TitleArea variant="large">
                <PageHeader.Title>Sign In</PageHeader.Title>
              </PageHeader.TitleArea>
            </PageHeader>
          </Box>
        </div>
        <div className="login-box">
          <div>
            <label class="label">Email address</label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="input"
              type="email"
            />
          </div>
          <div className="div">
            <label class="label">Password</label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="input"
              type="password"
            />
          </div>

          <Button variant="primary" sx={{ width: 250 }}>
            Sign Up
          </Button>
        </div>
        <div className="pass-box">
          <p>
            <a href="/signin">Sign in with a passkey</a>
          </p>
          <p>
            New to GitHub? <a href="/signup">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
