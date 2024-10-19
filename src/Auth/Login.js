import React, { useState } from "react";
import "./auth.style.css";
import data from "../constant/data";
import { useNavigate } from "react-router-dom";
import { paths } from "../routes/paths";

export default function Login({ setUserWantToSignup }) {
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
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLoginData({ ...userLoginData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!emailRegex.test(userLoginData.email)) {
      newErrors.emailError = "Invalid email format";
    }
    if (!passRegex.test(userLoginData.password)) {
      newErrors.passwordError = "Invalid password format";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.email !== userLoginData.email) {
        setErrors({ emailError: "You have not signed up with this email" });
        return;
      }
      if (userData.password !== userLoginData.password) {
        setErrors({ passwordError: "Password is not correct" });
        return;
      }
      alert("You are logged in successfully");
      
      navigate('/home');
    } else {
      alert("You are not signed up");
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(forgotPasswordEmail)) {
      setForgotPasswordError("Invalid email format");
      return;
    }
    alert(`Verification link sent to ${forgotPasswordEmail}`);
    setShowForgotPassword(false); 
    setForgotPasswordEmail(""); 
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNavigate = () => {
    navigate(paths.signup);
    setUserWantToSignup(true);
  };

  return (
    <div className="signup-container">
      <div className="form-side">
        {!showForgotPassword ? (
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
              {errors.emailError && <p className="error">{errors.emailError}</p>}
            </div>
            <div className="form-group">
        <label>Password:</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={userLoginData.password}
            onChange={handleChange}
            required
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              right: '10px',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        {errors.passwordError && <p className="error">{errors.passwordError}</p>}
      </div>
            <span onClick={() => setShowForgotPassword(true)}>Forget Password</span>
            <button type="submit" style={{ marginTop: "20px" }}>Login</button>

            <p className="account-message">
              Don't have an account?{" "}
              <span onClick={handleNavigate} className="link">sign up here</span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleForgotPasswordSubmit}>
            <h2>Forgot Password</h2>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={forgotPasswordEmail}
                onChange={(e) => setForgotPasswordEmail(e.target.value)}
                required
              />
              {forgotPasswordError && <p className="error">{forgotPasswordError}</p>}
            </div>
            <button type="submit">Send Verification Link</button>
            <button type="button" onClick={() => setShowForgotPassword(false)}>
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
