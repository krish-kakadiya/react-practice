import React, { useState } from "react";
import "./AuthForm.css";

const AuthForm = () => {
  const [mode, setMode] = useState("login"); // 'login' or 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setEmail("");
    setPassword("");
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const getUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };

  const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const handleSignup = () => {
    const users = getUsers();

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      alert("User already exists! Please login.");
      return;
    }

    users.push({ email, password });
    saveUsers(users);
    alert("Signup successful! You can now login.");
    toggleMode(); // Switch to login
  };

  const handleLogin = () => {
    const users = getUsers();
    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (validUser) {
      alert("Login successful!");
    } else {
      alert("Invalid email or password.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Invalid email format.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    mode === "signup" ? handleSignup() : handleLogin();
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>{mode === "login" ? "Login" : "Signup"}</h2>

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button type="submit">{mode === "login" ? "Login" : "Signup"}</button>

        <p className="switch-text">
          {mode === "login" ? "Don't have an account?" : "Already registered?"}{" "}
          <span className="switch-link" onClick={toggleMode}>
            {mode === "login" ? "Signup" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
