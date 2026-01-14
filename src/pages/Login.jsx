import "../styles/Login.css";
import { Link } from "react-router-dom";
import {login} from '../endpoints/api'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    const data = await login(username, password)
    console.log(data)
    if (data.success) {
      navigate(`/${username}`)
    }else {
      alert('invalid username or password')
    }
  }

  return (
    <div className="login-page">

      <div className="login-container">

        {/* LEFT SECTION */}
        <div className="left-section">
          <h2 className="brand">Voyage</h2>

          <div className="hero-text">
            <h1>
              Collaborate.<br />
              Share.<br />
              Learn.
            </h1>
            <p>
              Join the premier academic community connecting students,
              researchers, and professionals worldwide.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="right-section">

          <div className="login-box">
            <h2>Welcome Back</h2>
            <p>Please enter your details to access your dashboard.</p>

            <form onSubmit={handlelogin} className="login-form">

              <label>username</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)} value={username}
                placeholder="@university"
              />

              <div className="password-row">
                <label>Password</label>
                <a href="#">Forgot password?</a>
              </div>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)} value={password}

                placeholder="••••••••"
              />

              <button type="submit" className="login-btn">
                Log In →
              </button>

              <div className="divider">
                <span>Or continue with</span>
              </div>

              <div className="social-buttons">
                <button>Google</button>
                <button>Facebook</button>
              </div>

              <p className="signup-text">
                New to Voyage?
                <Link to="/register"> Create an account</Link>
              </p>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;
