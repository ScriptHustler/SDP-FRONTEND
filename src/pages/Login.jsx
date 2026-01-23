// import { useState } from "react";
// import { login } from "../api/auth.api";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { setUser } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login({ username, password });

//       // after login → fetch current user
//       const res = await fetch("http://127.0.0.1:8000/api/auth/users/me/", {
//         credentials: "include",
//       });
//       const userData = await res.json();

//       setUser(userData);
//       navigate("/");
//     } catch (err) {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//   <div className="min-h-screen flex items-center justify-center bg-black text-white">
//     <div className="w-full max-w-sm px-8 py-10 rounded-xl border border-gray-800">
//       {/* Logo / Brand */}
//       <h1 className="text-3xl font-bold mb-8 text-center">Sign in to Voyage</h1>

//       <form onSubmit={handleSubmit} className="space-y-5">
//         {/* Username */}
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Password */}
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Error */}
//         {error && (
//           <p className="text-sm text-red-500 text-center">{error}</p>
//         )}

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded-full"
//         >
//           Sign In
//         </button>
//       </form>

//       {/* Footer */}
//       <p className="text-sm text-gray-500 text-center mt-8">
//         Don’t have an account?{" "}
//        <a href="/register"> <span className="text-blue-500 hover:underline cursor-pointer">
//           Sign up
//         </span>
//         </a>
//       </p>
//     </div>
//   </div>
// );

// };

// export default Login;


import { useState } from "react";
import { login } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import voyageLogo from "../assets/voyage-logo.jpeg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ username, password });

      const res = await fetch("http://127.0.0.1:8000/api/auth/users/me/", {
        credentials: "include",
      });
      const userData = await res.json();

      setUser(userData);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white px-8 py-10 rounded-2xl shadow-lg border border-gray-200">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={voyageLogo}
            alt="Voyage"
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 text-center">
          Sign in to Voyage
        </h1>
        <p className="text-sm text-gray-500 text-center mt-2">
          Continue your learning journey
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 mt-8">

          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400
               focus:outline-none  focus:border-gray-700"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400
               focus:outline-none focus:border-gray-700"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#0f2041] hover:opacity-90 transition text-white font-semibold py-3 rounded-full shadow-sm"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-8">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-[#0f2041] hover:underline font-medium"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
