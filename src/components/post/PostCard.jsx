// import { useState } from "react";
// import Avatar from "../common/Avatar";
// import { useAuth } from "../../context/AuthContext";
// import { editPost, deletePost, getFeed } from "../../api/post.api";
// import LikeButton from "./LikeButton";
// import ShareButton from "./ShareButton";
// import CommentForm from "./CommentForm";
// import CommentList from "./CommentList";

// const PostCard = ({ post, onRefresh }) => {
//   const { user } = useAuth();

//   const [currentPost, setCurrentPost] = useState(post);
//   const [isEditing, setIsEditing] = useState(false);
//   const [caption, setCaption] = useState(post.caption || "");
//   const [content, setContent] = useState(post.content || "");
//   const [loading, setLoading] = useState(false);
//   const [showComments, setShowComments] = useState(false);

//   // RBAC: who can edit/delete
//   const canModify =
//     user &&
//     (user.id === post.user.id || user.role === "ADMIN");

//   // Refresh post from backend
//   const refreshPost = async () => {
//     try {
//       const data = await getFeed();

//       const updated = data.results.find((p) => p.id === post.id);
//       if (updated) setCurrentPost(updated);
//       onRefresh?.(); // optional parent refresh
//     } catch (err) {
//       console.error("Failed to refresh post", err);
//     }
//   };

//   // Edit post
//   const handleEdit = async () => {
//     try {
//       setLoading(true);
//       await editPost(post.id, { caption, content });
//       setIsEditing(false);
//       refreshPost();
//     } catch (err) {
//       console.error("Failed to edit post", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete post
//   const handleDelete = async () => {
//     if (!window.confirm("Delete this post?")) return;

//     try {
//       setLoading(true);
//       await deletePost(post.id);
//       onRefresh?.();
//     } catch (err) {
//       console.error("Failed to delete post", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="border-b border-gray-800 px-4 py-4 bg-black text-white">
//       {/* Header */}
//       <div className="flex justify-between items-start gap-3">
//         <div className="flex gap-3">
//           <Avatar
//             src={
//               currentPost.user.profile_picture
//                 ? `http://127.0.0.1:8000${currentPost.user.profile_picture}`
//                 : "/default-avatar.png"
//             }
//           />
//           <div>
//             <p className="font-semibold text-white">
//               {currentPost.user.username}
//             </p>
//             <p className="text-xs text-gray-500">
//               {new Date(currentPost.created_at).toLocaleString()}
//             </p>
//           </div>
//         </div>

//         {canModify && (
//           <div className="flex gap-3 text-sm">
//             <button
//               onClick={() => setIsEditing(!isEditing)}
//               className="text-gray-400 hover:text-blue-400 transition"
//             >
//               {isEditing ? "Cancel" : "Edit"}
//             </button>
//             <button
//               onClick={handleDelete}
//               className="text-gray-400 hover:text-red-500 transition"
//             >
//               Delete
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Content */}
//       {isEditing ? (
//         <div className="space-y-3 mt-3">
//           <input
//             value={caption}
//             onChange={(e) => setCaption(e.target.value)}
//             className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
//             placeholder="Caption"
//           />
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
//             placeholder="Content"
//           />
//           <button
//             onClick={handleEdit}
//             disabled={loading}
//             className="bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-full font-semibold disabled:opacity-50"
//           >
//             Save
//           </button>
//         </div>
//       ) : (
//         <div className="mt-3 space-y-2">
//           {currentPost.caption && (
//             <p className="font-medium text-white">
//               {currentPost.caption}
//             </p>
//           )}

//           {currentPost.post_type === "TEXT" &&
//             currentPost.content && (
//               <p className="text-gray-200 whitespace-pre-wrap">
//                 {currentPost.content}
//               </p>
//             )}

//           {currentPost.post_type === "IMAGE" &&
//             currentPost.image && (
//               <img

//                 src={`http://127.0.0.1:8000${currentPost.image}`}
//                 alt="Post"
//                 className="rounded-xl max-h-[480px] w-full object-cover border border-gray-800"
//               />
//             )}

//           {currentPost.post_type === "VIDEO" &&
//             currentPost.video && (
//               <video

//                 src={`http://127.0.0.1:8000${currentPost.video}`}
//                 controls
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="w-full rounded-xl border border-gray-800"
//               />
//             )}
//         </div>
//       )}

//       {/* Actions */}
//       <div className="flex gap-8 text-sm text-gray-400 mt-4">
//         <LikeButton
//           postId={currentPost.id}
//           likesCount={currentPost.likes_count}
//           onUpdate={refreshPost}
//         />

//         <button
//           onClick={() => setShowComments((prev) => !prev)}
//           className="hover:text-blue-400 transition"
//         >
//           Comments {currentPost.comments_count}
//         </button>

//         <ShareButton
//           post={currentPost}
//           onUpdate={refreshPost}
//         />
//       </div>

//       {/* Comments */}
//       {showComments && (
//         <div className="mt-4 pt-4 border-t border-gray-800 space-y-4">
//           <CommentForm
//             postId={currentPost.id}
//             onCommentAdded={refreshPost}
//           />
//           <CommentList postId={currentPost.id} />
//         </div>
//       )}
//     </div>
//   );

// };

// export default PostCard;


import { useState } from "react";
import Avatar from "../common/Avatar";
import { useAuth } from "../../context/AuthContext";
import { editPost, deletePost, getFeed } from "../../api/post.api";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";

const PostCard = ({ post, onRefresh }) => {
  const { user } = useAuth();

  const [currentPost, setCurrentPost] = useState(post);
  const [isEditing, setIsEditing] = useState(false);
  const [caption, setCaption] = useState(post.caption || "");
  const [content, setContent] = useState(post.content || "");
  const [loading, setLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const canModify =
    user && (user.id === post.user.id || user.role === "ADMIN");

  const refreshPost = async () => {
    try {
      const data = await getFeed();
      const updated = data.results.find((p) => p.id === post.id);
      if (updated) setCurrentPost(updated);
      onRefresh?.();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = async () => {
    try {
      setLoading(true);
      await editPost(post.id, { caption, content });
      setIsEditing(false);
      refreshPost();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this post?")) return;
    try {
      setLoading(true);
      await deletePost(post.id);
      onRefresh?.();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="border-b border-gray-200 px-4 py-5 bg-white">
      <div className="flex justify-between gap-3">

          <Link
            to={`/profile/${currentPost.user.username}`}
            className="flex gap-3 hover:opacity-90"
          >
            <Avatar
              src={
                currentPost.user.profile_picture
                  ? `http://127.0.0.1:8000${currentPost.user.profile_picture}`
                  : "/default-avatar.png"
              }
            />
            <div>
              <p className="font-semibold text-[#0f2041] hover:underline">
                {currentPost.user.username}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(currentPost.created_at).toLocaleString()}
              </p>
            </div>
          </Link>

          {canModify && (
            <div className="flex gap-3 text-sm">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-gray-500 hover:text-[#0f2041]"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
              <button
                onClick={handleDelete}
                className="text-gray-500 hover:text-red-500"
              >
                Delete
              </button>
            </div>
          )}
      </div>

      {isEditing ? (
        <div className="space-y-3 mt-4">
          <input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2041]"
            placeholder="Caption"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2041]"
            placeholder="Content"
          />
          <button
            onClick={handleEdit}
            disabled={loading}
            className="bg-[#0f2041] text-white px-5 py-2 rounded-full text-sm font-semibold disabled:opacity-50"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {currentPost.caption && (
            <p className="font-medium">{currentPost.caption}</p>
          )}
          {currentPost.post_type === "TEXT" && (
            <p className="text-gray-700 whitespace-pre-wrap">
              {currentPost.content}
            </p>
          )}
          {currentPost.post_type === "IMAGE" && currentPost.image && (
            <img
              src={`http://127.0.0.1:8000${currentPost.image}`}
              className="rounded-xl border border-gray-200"
            />
          )}
          {currentPost.post_type === "VIDEO" && currentPost.video && (
            <video
              src={`http://127.0.0.1:8000${currentPost.video}`}
              controls
              className="rounded-xl border border-gray-200"
            />
          )}
        </div>
      )}

      <div className="flex gap-8 text-sm text-gray-500 mt-4">
        <LikeButton
          postId={currentPost.id}
          likesCount={currentPost.likes_count}
          onUpdate={refreshPost}
        />
        <button
          onClick={() => setShowComments(!showComments)}
          className="hover:text-[#0f2041]"
        >
          Comments {currentPost.comments_count}
        </button>
        <ShareButton post={currentPost} onUpdate={refreshPost} />
      </div>

      {showComments && (
        <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
          <CommentForm
            postId={currentPost.id}
            onCommentAdded={refreshPost}
          />
          <CommentList postId={currentPost.id} />
        </div>
      )}
    </div>
  );
};

export default PostCard;
