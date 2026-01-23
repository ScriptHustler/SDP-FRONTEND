// import { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { updateProfile } from "../api/user.api";
// import { useNavigate } from "react-router-dom";

// const EditProfile = () => {
//   const { user, setUser } = useAuth();
//   const navigate = useNavigate();

//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [formData, setFormData] = useState({
//     username: "",
//     first_name: "",
//     last_name: "",
//     bio: "",
//     gender: "",
//     dob: "",
//     country: "",
//     profile_picture: null,
//   });

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         username: user.username || "",
//         first_name: user.first_name || "",
//         last_name: user.last_name || "",
//         bio: user.bio || "",
//         gender: user.gender || "",
//         dob: user.dob || "",
//         country: user.country || "",
//         profile_picture: null,
//       });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     const data = new FormData();
//     for (const key in formData) {
//       if (formData[key] !== null) data.append(key, formData[key]);
//     }

//     try {
//       const res = await updateProfile(data);
//       setUser(res.data);
//       setMessage("Profile updated successfully!");
//       setTimeout(() => {
//         navigate(`/profile/${res.data.username}`);
//       }, 800);
//     } catch (err) {
//       console.error(err);
//       setMessage("Failed to update profile.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
//       <div className="w-full max-w-md bg-gray-900 rounded-3xl shadow-2xl p-8">
//         <h2 className="text-2xl font-bold text-white mb-2">Edit Profile</h2>
//         <p className="text-gray-400 mb-6">Step {step} of 3</p>

//         {/* Profile Picture (always visible) */}
//         <div className="flex justify-center mb-6">
//           <label className="relative w-28 h-28 rounded-full overflow-hidden cursor-pointer border-2 border-gray-600 hover:border-blue-500 transition">
//             {formData.profile_picture ? (
//               <img
//                 src={URL.createObjectURL(formData.profile_picture)}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
//                 Upload
//               </div>
//             )}
//             <input
//               type="file"
//               name="profile_picture"
//               onChange={handleChange}
//               className="hidden"
//             />
//           </label>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* STEP 1 */}
//           {step === 1 && (
//             <>
//               <input
//                 name="username"
//                 placeholder="Username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//                 className="input-x"
//               />
//               <div className="flex gap-3">
//                 <input
//                   name="first_name"
//                   placeholder="First Name"
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   className="input-x w-1/2"
//                 />
//                 <input
//                   name="last_name"
//                   placeholder="Last Name"
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   className="input-x w-1/2"
//                 />
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setStep(2)}
//                 className="btn-primary w-full"
//               >
//                 Next
//               </button>
//             </>
//           )}

//           {/* STEP 2 */}
//           {step === 2 && (
//             <>
//               <input
//                 name="country"
//                 placeholder="Country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="input-x"
//               />
//               <input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 max="2007-12-31"
//                 className="input-x"
//               />
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="input-x"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="MALE">Male</option>
//                 <option value="FEMALE">Female</option>
//                 <option value="OTHER">Other</option>
//               </select>

//               <div className="flex gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setStep(1)}
//                   className="btn-secondary w-1/3"
//                 >
//                   Back
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setStep(3)}
//                   className="btn-primary w-2/3"
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           )}

//           {/* STEP 3 */}
//           {step === 3 && (
//             <>
//               <textarea
//                 name="bio"
//                 placeholder="Short bio"
//                 value={formData.bio}
//                 onChange={handleChange}
//                 maxLength={500}
//                 rows={3}
//                 className="input-x resize-none"
//               />

//               {message && (
//                 <p className="text-green-400 text-sm text-center mt-2">{message}</p>
//               )}

//               <div className="flex gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setStep(2)}
//                   className="btn-secondary w-1/3"
//                 >
//                   Back
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="btn-primary w-2/3"
//                 >
//                   {loading ? "Saving..." : "Save"}
//                 </button>
//               </div>
//             </>
//           )}
//         </form>

//         {/* X-style reusable classes */}
//         <style>{`
//           .input-x {
//             width: 100%;
//             background: #111827;
//             border: 1px solid #374151;
//             color: white;
//             padding: 12px 16px;
//             border-radius: 12px;
//             outline: none;
//           }
//           .input-x:focus {
//             border-color: #1d9bf0;
//           }
//           .btn-primary {
//             background: #1d9bf0;
//             color: white;
//             padding: 12px;
//             border-radius: 9999px;
//             font-weight: 600;
//             transition: background 0.2s;
//           }
//           .btn-primary:hover {
//             background: #1a8cd8;
//           }
//           .btn-secondary {
//             border: 1px solid #374151;
//             color: white;
//             padding: 12px;
//             border-radius: 9999px;
//             transition: background 0.2s;
//           }
//           .btn-secondary:hover {
//             background: #111827;
//           }
//         `}</style>
//       </div>
//     </div>


//   );
// };

// export default EditProfile;



// //////////////////------------------------////////////////////////////


import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "../api/user.api";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const imageStart = useRef({ x: 50, y: 50 });

  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    bio: "",
    gender: "",
    dob: "",
    country: "",
    profile_picture: null,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || "",
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        bio: user.bio || "",
        gender: user.gender || "",
        dob: user.dob || "",
        country: user.country || "",
        profile_picture: null,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      setZoom(1);
      setPosition({ x: 50, y: 50 });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  /* ====== FIXED DRAG LOGIC ====== */

  const handleMouseDown = (e) => {
    dragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
    imageStart.current = { ...position };
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;

    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;

    setPosition({
      x: Math.min(100, Math.max(0, imageStart.current.x + dx * 0.12)),
      y: Math.min(100, Math.max(0, imageStart.current.y + dy * 0.12)),
    });
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  /* ============================= */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const data = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) data.append(key, formData[key]);
    }

    try {
      const res = await updateProfile(data);
      setUser(res.data);
      setMessage("Profile updated successfully!");
      setTimeout(() => {
        navigate(`/profile/${res.data.username}`);
      }, 800);
    } catch (err) {
      console.error(err);
      setMessage("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const imageSrc = formData.profile_picture
    ? URL.createObjectURL(formData.profile_picture)
    : user?.profile_picture;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-[#0f2041] mb-1">
          Edit Profile
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Step {step} of 3
        </p>

        {/* Profile Picture */}
        <div
          className="flex flex-col items-center mb-6"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <label
            className="relative w-28 h-28 rounded-full overflow-hidden cursor-grab border-2 border-gray-300 hover:border-[#0f2041]"
            onMouseDown={handleMouseDown}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Profile"
                className="w-full h-full object-cover select-none"
                style={{
                  transform: `scale(${zoom})`,
                  objectPosition: `${position.x}% ${position.y}%`,
                }}
                draggable={false}
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                Upload
              </div>
            )}

            <input
              type="file"
              name="profile_picture"
              onChange={handleChange}
              className="hidden"
            />
          </label>

          {imageSrc && (
            <input
              type="range"
              min="1"
              max="2"
              step="0.01"
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="mt-3 w-32 accent-[#0f2041]"
            />
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <input name="username" value={formData.username} onChange={handleChange} required className="input-x" />
              <div className="flex gap-3">
                <input name="first_name" value={formData.first_name} onChange={handleChange} className="input-x w-1/2" />
                <input name="last_name" value={formData.last_name} onChange={handleChange} className="input-x w-1/2" />
              </div>
              <button type="button" onClick={() => setStep(2)} className="btn-primary w-full">Next</button>
            </>
          )}

          {step === 2 && (
            <>
              <input name="country" value={formData.country} onChange={handleChange} className="input-x" />
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} max="2007-12-31" className="input-x" />
              <select name="gender" value={formData.gender} onChange={handleChange} className="input-x">
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="btn-secondary w-1/3">Back</button>
                <button type="button" onClick={() => setStep(3)} className="btn-primary w-2/3">Next</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <textarea name="bio" value={formData.bio} onChange={handleChange} maxLength={500} rows={3} className="input-x resize-none" />
              {message && <p className="text-green-600 text-sm text-center">{message}</p>}
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)} className="btn-secondary w-1/3">Back</button>
                <button type="submit" disabled={loading} className="btn-primary w-2/3">
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </>
          )}
        </form>

        <style>{`
          .input-x {
            width: 100%;
            background: #fff;
            border: 1px solid #d1d5db;
            padding: 12px 16px;
            border-radius: 12px;
          }
          .input-x:focus {
            border-color: #0f2041;
            box-shadow: 0 0 0 2px rgba(15,32,65,.15);
          }
          .btn-primary {
            background: #0f2041;
            color: white;
            padding: 12px;
            border-radius: 9999px;
            font-weight: 600;
          }
          .btn-secondary {
            border: 1px solid #d1d5db;
            color: #0f2041;
            padding: 12px;
            border-radius: 9999px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default EditProfile;
