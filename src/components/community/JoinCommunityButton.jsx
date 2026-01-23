// import { useState } from "react";
// import { toggleJoinCommunity } from "../../api/community.api";

// const JoinCommunityButton = ({
//   communityId,
//   isJoinedInitial,
//   onToggle,
// }) => {
//   const [isJoined, setIsJoined] = useState(isJoinedInitial);
//   const [loading, setLoading] = useState(false);

//   const handleToggle = async () => {
//     try {
//       setLoading(true);
//       const res = await toggleJoinCommunity(communityId);
//       setIsJoined(res.data.joined);
//       onToggle?.(res.data.joined);
//     } catch (err) {
//       console.error("Join/Leave failed", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button
//       onClick={handleToggle}
//       disabled={loading}
//       className={`px-4 py-2 rounded text-sm font-medium ${
//         isJoined
//           ? "bg-gray-200 text-gray-800"
//           : "bg-blue-600 text-white"
//       }`}
//     >
//       {loading
//         ? "Please wait..."
//         : isJoined
//         ? "Leave Community"
//         : "Join Community"}
//     </button>
//   );
// };

// export default JoinCommunityButton;




import { useState } from "react";
import { toggleJoinCommunity } from "../../api/community.api";

const JoinCommunityButton = ({
  communityId,
  isJoinedInitial,
  onToggle,
}) => {
  const [isJoined, setIsJoined] = useState(isJoinedInitial);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    try {
      setLoading(true);
      const res = await toggleJoinCommunity(communityId);
      setIsJoined(res.data.joined);
      onToggle?.(res.data.joined);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
        isJoined
          ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
          : "bg-[#0f2041] text-white hover:opacity-90"
      }`}
    >
      {loading
        ? "Please wait..."
        : isJoined
        ? "Leave Community"
        : "Join Community"}
    </button>
  );
};

export default JoinCommunityButton;
