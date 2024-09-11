import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      // await axios
      //   .post("http://localhost:8080/api/loginUser", {
      //     email,
      //     password,
      //   })
      //   .then((res) => {
      //     if (res.data === "exist") {
      //       // Redirect to the shop page upon successful login
      //       navigate("/shop", { state: { id: email } });
      //     } else if (res.data === "notexist") {
      //       alert("User has not signed up");
      //     }
      //   })
      //   .catch((e) => {
      //     setError("Wrong details");
      //     console.log(e);
      //   });
      await axios
  .post("http://localhost:8080/api/loginUser", {
    email,
    password,
  })
  .then((res) => {
    if (res.data === "exist") {
      // Redirect to the shop page upon successful login
      // navigate("/shop", { state: { id: email } }); // <-- Redirect happening here
      navigate("/"); // <-- Redirect happening here
    } else if (res.data === "notexist") {
      alert("User has not signed up");
    }
  })
  .catch((e) => {
    setError("Wrong details");
    console.log(e);
  });

    } catch (e) {
      console.log(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
            </span>
          </div>

          <div className="form-group password-field">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
            </span>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Login</button>
        </form>

        <Link to="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </Link>

        <p>OR</p>

        <Link to="/signup">Signup Page</Link>
      </div>
    </div>
  );
}

export default Login;
