import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../endpoints/api";
import { useState } from "react";

function Register() {


  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password === confirmpassword) {
      try {
        await register(username, email, country,gender, dob, password);
        console.log({ username, email, country, gender, dob, password });

        navigate('/login');
      } catch (error) {
        console.error(error.response?.data || error);
        alert('error registering');
      }
    } else {
      alert('password and confirm password are not identical');
    }
  };



  return (
    <div className="page">

      {/* Top bar */}
      <div className="top-bar">
        <div className="logo">
          <svg viewBox="0 0 48 48">
            <path d="M24 4L6 14V34L24 44L42 34V14L24 4Z" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M24 22V44" stroke="currentColor" strokeWidth="4" />
            <path d="M24 22L42 14" stroke="currentColor" strokeWidth="4" />
            <path d="M24 22L6 14" stroke="currentColor" strokeWidth="4" />
            <circle cx="24" cy="13" r="3" />
          </svg>
          <h2>Voyage</h2>
        </div>
        <a href="#">Help</a>
      </div>

      {/* Card */}
      <div className="card">
        <h1>Join Voyage</h1>
        <p>Create your account to start your journey.</p>

        <form onSubmit={handleRegister}>
          <div className="row">
            {/* <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" /> */}

            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="dummy@voyage.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>


          <input type="password" placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />

          <div className="row">
            <select value={gender}  onChange={(e) => setGender(e.target.value)} >
              <option value=''>Gender</option>
              <option value='MALE'>Male</option>
              <option value='FEMALE'>Female</option>
            </select>
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>

          <input type="text" placeholder="add country" value={country} onChange={(e) => setCountry(e.target.value)} />

{/* niche wale me apne api se countries k options fetch karege haa sare count */}
          {/* <select onChange={(e) => setCountry(e.target.value)} value={country} >
            <option value=''>Set Country</option>
            <option  >India</option>
            <option>USA</option>
          </select> */}
          <button className="submit">Submit</button>
        </form>
        <div className="footer">
          Already have an account?
          <Link to="/"> Login</Link>

        </div>
      </div>

    </div>
  );
}
export default Register;
