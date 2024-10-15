import React from "react";
import "./auth.style.css";
import { useState } from "react";
import data from "../constant/data";

export default function Signup() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLoginData({ ...userLoginData, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleForgotPasswordChange = (e) => {
    setForgotPasswordEmail(e.target.value);
    setForgotPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      // userLoged(true); // Ensure this function is defined in your context
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

  return (
    <div>
      <div className="signup-container">
        <div className="image-side">{/* Add your image here */}</div>
        <div className="form-side">
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="form-group">
              <label>Full Name:</label>
              <input type="text" name="fullName" required />
            </div>
            <div className="form-group">
              <label>Email:</label>
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
              <label>Password:</label>
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
            <button type="submit">Sign Up</button>
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
    </div>
  );
}
