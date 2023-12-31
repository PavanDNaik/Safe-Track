import React, { useState } from "react";
import "../css/login.css";
import logo from "../image/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userCountry: "",
    userNumber: "",
  });
  async function handleSignUp() {
    if (
      useState.userName === "" ||
      useState.userEmail === "" ||
      useState.userPassword === "" ||
      useState.userCountry === "" ||
      useState.userNumber === ""
    ) {
      setError("pls Fill The Form");
      return;
    }
    const response = await fetch(`${FETCH_BASE_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const responseJSON = await response.json();

    if (responseJSON.success) {
      localStorage.setItem("safeToken", responseJSON.authToken);
      localStorage.setItem("userName", responseJSON.userName);
      navigate("/setpin");
    } else {
      setError(responseJSON.fethError || responseJSON.serverError);
    }
  }
  function changeUserInfo(field, value) {
    setUserData({ ...userData, [field]: value });
  }
  return (
    <div className="form-wrapper">
      <div className="form-side">
        <div className="error">{error}</div>
        <div className="my-form">
          <div className="form-welcome-row">
            <h1>Create your account &#x1F44F;</h1>
          </div>
          <div className="socials-row"></div>
          <div className="divider"></div>
          <div className="text-field">
            <label htmlFor="name">
              Name:
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Your Name"
                value={userData.userName}
                onChange={(e) => changeUserInfo("userName", e.target.value)}
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillrul="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </label>
          </div>
          <div className="text-field">
            <label htmlFor="country">
              Country:
              <input
                type="text"
                id="country"
                name="country"
                autoComplete="off"
                placeholder="Your Country"
                value={userData.userCountry}
                onChange={(e) => changeUserInfo("userCountry", e.target.value)}
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-globe-americas"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
              </svg>
            </label>
          </div>
          <div className="text-field">
            <label htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Your email"
                value={userData.userEmail}
                onChange={(e) => changeUserInfo("userEmail", e.target.value)}
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-globe-americas"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
              </svg>
            </label>
          </div>
          <div className="text-field">
            <label htmlFor="phone">
              Phone Number:
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="off"
                placeholder="Your Number"
                value={userData.userNumber}
                onChange={(e) => changeUserInfo("userNumber", e.target.value)}
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </label>
          </div>

          <div className="text-field">
            <label htmlFor="password">
              Password:
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Your Password"
                title="Minimum 6 characters at 
                                    least 1 Alphabet and 1 Number"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                value={userData.userPassword}
                onChange={(e) => changeUserInfo("userPassword", e.target.value)}
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
              </svg>
            </label>
          </div>
          <button className="my-form__button" onClick={handleSignUp}>
            Sign Up
          </button>
          <div className="my-form__actions">
            <Link to="/login" title="Create Account">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
      <div className="l2">
        <img src={logo} className="big-logo" alt="Ofin" />
      </div>
    </div>
  );
}

export default SignUp;
