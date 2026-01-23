// import React from "react";
// import { useNavigate } from "react-router-dom";
// import FollowButton from "./FollowButton";
// import Avatar from "../components/common/Avatar";


// const ProfileHeader = ({ userData, currentUser }) => {
//   const navigate = useNavigate();
//   const isSelf = currentUser?.username === userData.username;

//   const goToFollowers = () => navigate(`/profile/${userData.username}/followers`);
//   const goToFollowing = () => navigate(`/profile/${userData.username}/following`);
//   const goToEditProfile = () => navigate(`/profile/edit`);

//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         padding: "20px",
//         borderRadius: "8px",
//         marginBottom: "20px",
//       }}
//     >
        

//       <Avatar
//   src={userData.profile_picture ? `http://127.0.0.1:8000${userData.profile_picture}` : '/default-avatar.png'}
//   alt={userData.username}
//   size={80}
// />

//  <h2>{userData.username}</h2>
//       {userData.role && <p>Role: {userData.role}</p>}
//       <p>{userData.bio}</p>

// <p style={{ cursor: "pointer" }}>
//   <span
//     onClick={goToFollowers}
//     style={{ marginRight: "10px", textDecoration: "underline", color: "blue" }}
//   >
//     Followers: {userData.followers_count ?? 0}
//   </span>
//   <span
//     onClick={goToFollowing}
//     style={{ textDecoration: "underline", color: "blue" }}
//   >
//     Following: {userData.following_count ?? 0}
//   </span>
// </p>

//       {/* Show Edit for own profile, FollowButton otherwise */}
//       {isSelf ? (
//         <button
//           onClick={goToEditProfile}
//           style={{
//             padding: "6px 12px",
//             borderRadius: "6px",
//             border: "1px solid #333",
//             background: "#007bff",
//             color: "#fff",
//             cursor: "pointer",
//           }}
//         >
//           Edit Profile
//         </button>
//       ) : (
//         <FollowButton targetUser={userData.username} />
//       )}
//     </div>
//   );
// };

// export default ProfileHeader;



import React from "react";
import { useNavigate } from "react-router-dom";
import FollowButton from "./FollowButton";
import Avatar from "../components/common/Avatar";

const ProfileHeader = ({ userData, currentUser }) => {
  const navigate = useNavigate();
  const isSelf = currentUser?.username === userData.username;

  const goToFollowers = () =>
    navigate(`/profile/${userData.username}/followers`);
  const goToFollowing = () =>
    navigate(`/profile/${userData.username}/following`);
  const goToEditProfile = () => navigate(`/profile/edit`);

  return (
    <div className="border-b border-gray-200 bg-white">
      {/* Banner */}
      <div className="h-40 bg-gradient-to-br from-[#0f2041] via-[#132b5f] to-[#0f2041] relative">
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Avatar */}
        <div className="absolute -bottom-16 left-6">
          <div className="rounded-full ring-4 ring-white shadow-lg">
            <Avatar
              src={
                userData.profile_picture
                  ? `http://127.0.0.1:8000${userData.profile_picture}`
                  : "/default-avatar.png"
              }
              alt={userData.username}
            />
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-20 px-6 pb-6">
        {/* Top Row */}
        <div className="flex justify-end mb-3">
          {isSelf ? (
            <button
              onClick={goToEditProfile}
              className="
                px-4 py-1.5
                rounded-full
                border border-[#0f2041]
                text-sm font-semibold
                text-[#0f2041]
                hover:bg-[#0f2041]
                hover:text-white
                transition-all
              "
            >
              Edit profile
            </button>
          ) : (
            <FollowButton targetUser={userData.username} />
          )}
        </div>

        {/* Username */}
        <h2 className="text-2xl font-bold text-[#0f2041] tracking-tight">
          {userData.username}
        </h2>

        {/* Role */}
        {userData.role && (
          <p className="text-gray-500 text-sm mt-1">
            {userData.role}
          </p>
        )}

        {/* Bio */}
        {userData.bio && (
          <p className="mt-4 text-sm text-gray-700 leading-relaxed max-w-xl">
            {userData.bio}
          </p>
        )}

        {/* Followers / Following */}
        <div className="flex gap-6 mt-6 text-sm text-gray-500">
          <span
            onClick={goToFollowing}
            className="cursor-pointer hover:text-[#0f2041] transition"
          >
            <span className="text-[#0f2041] font-semibold">
              {userData.following_count ?? 0}
            </span>{" "}
            Following
          </span>

          <span
            onClick={goToFollowers}
            className="cursor-pointer hover:text-[#0f2041] transition"
          >
            <span className="text-[#0f2041] font-semibold">
              {userData.followers_count ?? 0}
            </span>{" "}
            Followers
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
