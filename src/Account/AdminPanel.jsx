import React, { useState } from "react";
import "./AdminPanel.css"; // Assuming you have a CSS file for styling
export default function AdminPanel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="box">
      {/* Title Section */}
      <div className="title">
        <h1>Admin Panel</h1>
      </div>

      {/* User Box */}
      <div className="userbox">
        {/* Email Box */}
        <div className="emailbox">
          <div>
            {" "}
            <label className="login">Login</label>
            <input
              type="text"
              value={email}
              className="email-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="password">Password</label>
            <input
              type="password"
              value={password}
              className="
              password-input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Login Button */}
        <div className="login-box">
          <button className="loginbutton">Login</button>
        </div>

        {/* Doctor Login Link */}
        <div className="doctor-login">
          <span>Doctor Login?</span>{" "}
          <a href="#" name="clickhere">
            Click here
          </a>
        </div>
      </div>
    </div>
  );
}
