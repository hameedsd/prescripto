import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Form.css"; // Create a CSS file for styling

function Login() {
  // State variables to store the username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Username:", username);
    console.log("Password:", password);

    // Example: Navigate to the "Topbar" route after successful login
    navigate("/Topbar");
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="iu"
            value={username} // Bind input value to state
            onChange={(e) => setUsername(e.target.value)} // Update state on input change
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="ip"
            value={password} // Bind input value to state
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
