// src/components/post/CommentForm.jsx
import { useState } from "react";
import { addComment } from "../../api/post.api";

const CommentForm = ({ postId, onCommentAdded }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      setLoading(true);
      await addComment(postId, content);
      setContent("");
      onCommentAdded(); // re-sync
    } catch (err) {
      console.error("Comment failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-1 bg-black text-white border border-gray-700 rounded p-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-600"
        placeholder="Write a comment..."
      />
      <button disabled={loading} className="text-sm">
        Post
      </button>
    </form>
  );
};

export default CommentForm;
