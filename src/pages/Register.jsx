import { useState, useRef } from "react";
import { register } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import voyageLogo from "../assets/voyage-logo.jpeg";

const Register = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [step, setStep] = useState(1);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    gender: "MALE",
    dob: "",
    country: "",
    bio: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({});
const [touched, setTouched] = useState({});
const [passwordTouched, setPasswordTouched] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfilePicture(file);
    setPreviewUrl(URL.createObjectURL(file));
    setOffset({ x: 0, y: 0 });
    setZoom(1);
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    dragStart.current = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setOffset({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }
      if (profilePicture) {
        data.append("profile_picture", profilePicture);
      }

      await register(data);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        navigate("/login");
      }, 2500);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Registration failed. Check your inputs."
      );
    } finally {
      setLoading(false);
    }
  };

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const isPasswordValid = passwordRegex.test(formData.password);

  const validateStep1 = () => {
  const newErrors = {};
  if (!formData.username.trim()) newErrors.username = "Username is required";
  if (!formData.email.trim()) newErrors.email = "Email is required";
  if (!formData.password.trim()) newErrors.password = "Password is required";
  else if (!isPasswordValid)
    newErrors.password = "Password must include uppercase, lowercase & number";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const handleEnterNext = (e, nextStep) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextStep();
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center px-4"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-2xl">

        <div className="flex justify-center py-6 border-b border-gray-100">
          <img src={voyageLogo} alt="Voyage" className="h-20" />
        </div>

        <div className="p-8">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Create your Voyage account
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Step {step} of 4
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <input
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  
                  className="input-light"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                  onKeyDown={(e) =>
                    handleEnterNext(e, () => isPasswordValid && setStep(2))
                  }
                  className="input-light"
                  required
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  onChange={handleChange}
                  onKeyDown={(e) =>
                    handleEnterNext(e, () => isPasswordValid && setStep(2))
                  }
                  className="input-light"
                  required
                />

                {!isPasswordValid && formData.password && (
                  <p className="text-xs text-red-500">
                    Password must include uppercase, lowercase & number.
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!isPasswordValid}
                  className={`btn-primary w-full ${!isPasswordValid ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Continue
                </button>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <div className="flex gap-3">
                  <input
                    name="first_name"
                    placeholder="First name"
                   
                    value={formData.first_name}
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnterNext(e, () => setStep(3))}
                    className="input-light w-1/2"
                  />
                  <input
                    name="last_name"
                    placeholder="Last name"
                    value={formData.last_name}
                    onChange={handleChange}
                    onKeyDown={(e) => handleEnterNext(e, () => setStep(3))}
                    className="input-light w-1/2"
                  />
                </div>

                <select
                  name="gender"
                  onChange={handleChange}
                  value={formData.gender}
                  className="input-light"
                >
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </select>

                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  min="1996-01-01"
                  max="2007-12-31"
                  onChange={handleChange}
                  onKeyDown={(e) => handleEnterNext(e, () => setStep(3))}
                  className="input-light"
                />

                <input
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  onKeyDown={(e) => handleEnterNext(e, () => setStep(3))}
                  className="input-light"
                />

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="btn-secondary w-1/3">Back</button>
                  <button type="button" onClick={() => setStep(3)} className="btn-primary w-2/3" >Continue</button>
                </div>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <textarea
                  name="bio"
                  rows={5}
                  value={formData.bio}
                  placeholder="Tell us a little about yourself"
                  onChange={handleChange}
                  onKeyDown={(e) => handleEnterNext(e, () => setStep(4))}
                  className="input-light resize-none p-3"
                />

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="btn-secondary w-1/3">Back</button>
                  <button type="button" onClick={() => setStep(4)} className="btn-primary w-2/3">Continue</button>
                </div>
              </>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <>
                <div className="flex flex-col items-center gap-3">
                  <div
                    onClick={() => fileInputRef.current.click()}
                    onMouseDown={previewUrl ? handleMouseDown : undefined}
                    className="w-28 h-28 rounded-full overflow-hidden border bg-gray-100 cursor-pointer"
                  >
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Profile"
                        style={{
                          transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                        }}
                        className="w-full h-full object-cover select-none"
                        draggable={false}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                        Add photo
                      </div>
                    )}
                  </div>

                  {previewUrl && (
                    <input
                      type="range"
                      min="1"
                      max="2"
                      step="0.01"
                      value={zoom}
                      onChange={(e) => setZoom(e.target.value)}
                    />
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleFileChange}
                  />
                </div>

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(3)} className="btn-secondary w-1/3">Back</button>
                  <button type="submit" disabled={loading} className="btn-primary w-2/3">
                    {loading ? "Creating..." : "Sign up"}
                  </button>
                </div>
              </>
            )}
          </form>

          {error && <p className="text-sm text-red-500 mt-4 text-center">{error}</p>}
        </div>
      </div>

      {success && (
        <div className="fixed top-6 right-6 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2">
          <span className="text-lg">✔</span>
          <span>Account created successfully</span>
        </div>
      )}

      <style>{`
        .input-light {
          width: 100%;
          border: 1px solid #dee2e9;
          padding: 20px 17px;
          border-radius: 14px;
        }
        .btn-primary {
          background: #0f2041;
          color: white;
          padding: 13px;
          border-radius: 9999px;
          font-weight: 600;
          margin-top: 15px; 
        }
        .btn-secondary {
          border: 1px solid #e5e7eb;
          padding: 13px;
          border-radius: 9999px;
          margin-top: 15px;
        }
      `}</style>
    </div>
  );
};

export default Register;



