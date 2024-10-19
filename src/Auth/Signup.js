import React, { useState } from "react";
import "./auth.style.css";
import data from "../constant/data";
import {paths}from "../routes/paths"
import { useNavigate } from "react-router-dom";
export default function Signup({ setUserWantToSignup }) {
  const { emailRegex, passRegex } = data;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    phoneError: "",
  });
const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!emailRegex.test(formData.email)) {
      newErrors.emailError = "Invalid email format";
    }
    if (!passRegex.test(formData.password)) {
      newErrors.passwordError = "Invalid password format";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPasswordError = "Passwords do not match.";
    }
    if (!formData.phone) {
      newErrors.phoneError = "Phone number is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    localStorage.setItem("userData", JSON.stringify({
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      phone: formData.phone,
    }));
    alert("You have signed up successfully!");
    const storedUserData = localStorage.getItem('userData');

  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    userData.loginTime = Date.now(); 
    localStorage.setItem('userData', JSON.stringify(userData));
  }

    setUserWantToSignup(false); 
  };

  const handlUseHasAccout=()=>{
    navigate(paths.login)
    setUserWantToSignup(false)

  }
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phoneError && <p className="error">{errors.phoneError}</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
            value={formData.password}
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
      <div className="form-group">
        <label>Confirm Password:</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
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
        {errors.confirmPasswordError && (
          <p className="error">{errors.confirmPasswordError}</p>
        )}
      </div>
        <button type="submit">Sign Up</button>
        <p className="account-message">
        Already have an account?{" "}
        <span onClick={() =>handlUseHasAccout()} className="link">
          Log in here
        </span>
      </p>
            </form>
    </div>
  );
}
