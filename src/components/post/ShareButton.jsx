// // src/components/post/ShareButton.jsx
// import { sharePost } from "../../api/post.api";

// const ShareButton = ({ postId, sharesCount, onUpdate }) => {
//   const handleShare = async () => {
//     try {
//       await sharePost(postId);
//       onUpdate(); // backend truth
//     } catch (err) {
//       console.error("Share failed", err);
//     }
//   };

//   return (
//     <button
//       onClick={handleShare}
//       className="text-sm hover:underline"
//     >
//       🔁 {sharesCount}
//     </button>
//   );
// };

// export default ShareButton;

// src/components/post/ShareButton.jsx
import { sharePost } from "../../api/post.api";

const ShareButton = ({ post, onUpdate }) => {
  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/posts/${post.id}`;

    try {
      // 1️⃣ Native Share (mobile / supported browsers)
      if (navigator.share) {
        await navigator.share({
          title: "Voyage Post",
          text: post.caption || "Check out this post on Voyage",
          url: shareUrl,
        });
      } else {
        // 2️⃣ Fallback: copy link
        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied to clipboard");
      }

      // 3️⃣ Record share in backend
      await sharePost(post.id);

      // 4️⃣ Re-sync from backend
      onUpdate();
    } catch (err) {
      console.error("Share failed", err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="text-sm hover:underline"
    >
      Share {post.shares_count}
    </button>
  );
};

export default ShareButton;

