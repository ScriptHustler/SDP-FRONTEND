// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createCommunity } from "../api/community.api";

// const CreateCommunity = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     about: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!form.name || !form.about) {
//       setError("All fields are required.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await createCommunity(form);
//       navigate(`/communities/${res.data.id}`);
//     } catch (err) {
//       setError(
//         err.response?.data?.detail || "Failed to create community."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
//       <div className="w-full max-w-2xl bg-gray-900 rounded-2xl shadow-lg p-8">
//         <h1 className="text-2xl font-bold mb-6 text-white">Create Community</h1>

//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Community Name */}
//           <div>
//             <label className="block font-medium mb-1 text-gray-200">
//               Community Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="e.g. Django Developers"
//               className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//           </div>

//           {/* About */}
//           <div>
//             <label className="block font-medium mb-1 text-gray-200">
//               About
//             </label>
//             <textarea
//               name="about"
//               value={form.about}
//               onChange={handleChange}
//               rows="4"
//               placeholder="What is this community about?"
//               className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-xl transition disabled:opacity-50"
//           >
//             {loading ? "Creating..." : "Create Community"}
//           </button>
//         </form>
//       </div>
//     </div>


//   );
// };

// export default CreateCommunity;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCommunity } from "../api/community.api";

const CreateCommunity = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    about: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.about) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      const res = await createCommunity(form);
      navigate(`/communities/${res.data.id}`);
    } catch (err) {
      setError(
        err.response?.data?.detail || "Failed to create community."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#0f2041]">
            Create Community
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Start a space where people can connect and learn together
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Community Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Community Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Django Developers"
              className="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded-xl px-4 py-2.5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f2041]/30 focus:border-[#0f2041]"
            />
          </div>

          {/* About */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              About
            </label>
            <textarea
              name="about"
              value={form.about}
              onChange={handleChange}
              rows="4"
              placeholder="Describe what this community is about"
              className="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded-xl px-4 py-3 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#0f2041]/30 focus:border-[#0f2041]"
            />
          </div>

          {/* Action */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0f2041] hover:bg-[#0c1a36] text-white font-semibold py-2.5 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Community"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCommunity;
