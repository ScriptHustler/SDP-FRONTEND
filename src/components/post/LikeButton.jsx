// src/components/post/LikeButton.jsx
import { toggleLike } from "../../api/post.api";

const LikeButton = ({ postId, likesCount, onUpdate }) => {
  const handleLike = async () => {
    try {
      await toggleLike(postId);
      onUpdate(); // ⬅️ re-sync from backend
    } catch (err) {
      console.error("Like failed", err);
    }
  };

  return (
    <button
      onClick={handleLike}
      className="text-sm hover:underline"
    >
      Likes {likesCount}
    </button>
  );
};

export default LikeButton;
