import React, { useState, useEffect } from "react";
import { toggleFollow, getFollowing } from "../api/user.api";

const FollowButton = ({ targetUser, onFollowChange }) => {
  const [following, setFollowing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFollowingStatus = async () => {
      try {
        const res = await getFollowing(targetUser);
        setFollowing(res.data.following);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchFollowingStatus();
  }, [targetUser]);

  const handleClick = async (e) => {
    e.stopPropagation();
    try {
      const res = await toggleFollow(targetUser);
      setFollowing(res.data.following);

      // Notify parent about the change
      if (onFollowChange) {
        onFollowChange(res.data.following); // true or false
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <button disabled>Loading...</button>;

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "6px 12px",
        borderRadius: "6px",
        border: "1px solid #333",
        background: following ? "#eee" : "#007bff",
        color: following ? "#333" : "#fff",
        cursor: "pointer",
      }}
    >
      {following ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
