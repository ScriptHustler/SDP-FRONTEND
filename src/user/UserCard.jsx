import React from "react";
import { useNavigate } from "react-router-dom";
import FollowButton from "./FollowButton";
import Avatar from "../components/common/Avatar";

const UserCard = ({ user, currentUser, darkMode = false }) => {
  const navigate = useNavigate();
  const isSelf = currentUser?.username === user.username;

  const goToProfile = () => navigate(`/profile/${user.username}`);

  const initialFollowing =
    currentUser?.following?.some((u) => u.username === user.username) || false;

  return (
    <div
      onClick={goToProfile}
      className={`flex justify-between items-center p-4 mb-3 rounded-xl cursor-pointer transition-colors duration-200
        ${darkMode ? "bg-[#1B1F26] hover:bg-[#272B33]" : "bg-white hover:bg-gray-100"}
      `}
    >
      {/* Left Section: Avatar + User Info */}
      <div className="flex items-center gap-4">
        <Avatar
          src={
            user.profile_picture
              ? `http://127.0.0.1:8000${user.profile_picture}`
              : "/default-avatar.png"
          }
          alt={user.username}
        />
        <div className="flex flex-col">
          <span className={`font-semibold text-sm md:text-base ${darkMode ? "text-white" : "text-black"}`}>
            {user.username}
          </span>
          {user.bio && (
            <span className={`text-xs md:text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {user.bio}
            </span>
          )}
          <span className={`text-xs mt-2 ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
            {user.followers_count ?? 0} followers • {user.following_count ?? 0} following
          </span>
        </div>
      </div>

      {/* Right Section: Follow Button */}
      {!isSelf && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="ml-2"
        >
          <FollowButton targetUser={user.username} initialFollowing={initialFollowing} />
        </div>
      )}
    </div>
  );
};

export default UserCard;
