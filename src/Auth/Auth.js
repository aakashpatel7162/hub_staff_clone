import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import './auth.style.css'; // Import CSS for styling

export default function Auth() {
  const [userWantToSignUp, setUserWantToSignup] = useState(false);

  return (
    <div className="auth-container">
  <div className="image-side">
    <img 
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&auto=format&fit=crop&q=80" 
      alt="Auth" 
    />
  </div>
  <div className="form-side">
    {userWantToSignUp ? (
      <Signup />
    ) : (
      <Login setUserWantToSignup={setUserWantToSignup} />
    )}
    
  </div>
</div>


  );
}
