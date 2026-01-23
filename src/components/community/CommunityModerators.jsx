// import { useState } from "react";
// import api from "../../api/axios";

// const CommunityModerators = ({ community, currentUser }) => {
//   const isCreator = community.created_by === currentUser.username;

//   const [username, setUsername] = useState("");
//   const [loading, setLoading] = useState(false);

//   const addModerator = async () => {
//     if (!username.trim()) return;

//     try {
//       setLoading(true);
//       await api.post(
//         `/communities/${community.id}/moderators/add/`,
//         { username }
//       );
//       window.location.reload();
//     } catch {
//       alert("Unable to assign moderator");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isCreator) return null;

//   return (
//     <section className="mt-6 border border-gray-800 rounded-xl p-4 bg-black">
//       <h3 className="font-semibold mb-3">
//         Moderators
//       </h3>

//       {community.moderators.length === 0 && (
//         <p className="text-sm text-gray-500 mb-3">
//           No moderators yet
//         </p>
//       )}

//       <div className="flex gap-2">
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="flex-1 bg-black border border-gray-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
//         />

//         <button
//           onClick={addModerator}
//           disabled={loading}
//           className="bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-full text-sm font-semibold"
//         >
//           Add
//         </button>
//       </div>
//     </section>
//   );
// };

// export default CommunityModerators;


import { useState } from "react";
import api from "../../api/axios";

const CommunityModerators = ({ community, currentUser }) => {
  const isCreator = community.created_by === currentUser.username;

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const addModerator = async () => {
    if (!username.trim()) return;
    try {
      setLoading(true);
      await api.post(
        `/communities/${community.id}/moderators/add/`,
        { username }
      );
      window.location.reload();
    } catch {
      alert("Unable to assign moderator");
    } finally {
      setLoading(false);
    }
  };

  if (!isCreator) return null;

  return (
    <section className="mt-6 border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
      <h3 className="font-semibold text-[#0f2041] mb-3">
        Manage Moderators
      </h3>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2041]"
        />
        <button
          onClick={addModerator}
          disabled={loading}
          className="bg-[#0f2041] text-white px-5 py-2 rounded-full text-sm font-semibold"
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default CommunityModerators;
