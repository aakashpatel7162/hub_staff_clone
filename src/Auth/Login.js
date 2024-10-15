import React from "react";
import "./auth.style.css";
import data from "../constant/data";
import { useState } from "react";
export default function Login({setUserWantToSignup}) {
  const { emailRegex, passRegex } = data;
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [forgotPasswordError, setForgotPasswordError] = useState("");

  const handleForgotPasswordChange = (e) => {
    setForgotPasswordEmail(e.target.value);
    setForgotPasswordError("");
  };

  const handleSubmit = (e) => {
    console.log(userLoginData, "userLoginData");
    e.preventDefault();
    console.log("");

    const { email, loginPass } = data.errorMessages;

    const newErrors = {};

    if (!emailRegex.test(userLoginData.email)) {
      newErrors.emailError = email;
    }
    if (!passRegex.test(userLoginData.password)) {
      newErrors.passwordError = loginPass;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log(newErrors, "newErrors");
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      const userEmail = userData.email;
      const userPassword = userData.password;

      if (userEmail !== userLoginData.email) {
        setErrors({ emailError: "You have not signed up with this email" });
        return;
      }
      if (userPassword !== userLoginData.password) {
        setErrors({ passwordError: "Password is not correct" });
        return;
      }
      alert("You are logged in successfully");
    } else {
      alert("You are not signed up");
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (emailRegex.test(forgotPasswordEmail)) {
      alert(`Verification link sent to ${forgotPasswordEmail}`);
      setShowForgotPassword(false);
      setForgotPasswordEmail("");
    } else {
      setForgotPasswordError("Please enter a valid email.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLoginData({ ...userLoginData, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  return (
      <div className="signup-container">

        <div className="form-side">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="form-group">
              <label>WORK EMAIL*</label>
              <input
                type="email"
                name="email"
                value={userLoginData.email}
                onChange={handleChange}
                required
              />
              {errors.emailError && (
                <p className="error">{errors.emailError}</p>
              )}
            </div>
            <div className="form-group">
              <label>PASSWORD*</label>
              <input
                type="password"
                name="password"
                value={userLoginData.password}
                onChange={handleChange}
                required
              />
              {errors.passwordError && (
                <p className="error">{errors.passwordError}</p>
              )}
            </div>
            <span>Forget Password</span>
            <button type="submit" onClick={()=>setUserWantToSignup(true)} >Login</button>

            <span>
              Don't have an account?{" "}
              <span onClick={() => setShowForgotPassword(true)}>
                Get started
              </span>
            </span>
          </form>

          {showForgotPassword && (
            <form onSubmit={handleForgotPasswordSubmit}>
              <h2>Forgot Password</h2>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={forgotPasswordEmail}
                  onChange={handleForgotPasswordChange}
                  required
                />
                {forgotPasswordError && (
                  <p className="error">{forgotPasswordError}</p>
                )}
              </div>
              <button type="submit">Send Verification Link</button>
              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
              >
                Cancel
              </button>
            </form>
          )}
        </div>
      </div>
  );
}
