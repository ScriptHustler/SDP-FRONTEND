// src/components/post/CommentList.jsx
import { useEffect, useState } from "react";
import { getComments } from "../../api/post.api";
import Avatar from "../common/Avatar";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const loadComments = async () => {
    const data = await getComments(postId);
    setComments(data.results);
  };

  useEffect(() => {
    loadComments();
  }, [postId]);

  
  return (
    <div className="space-y-2">
      {comments.map((c) => (
        
        <div key={c.id} className="flex gap-2 text-sm">
          <Avatar
      src={
        c.user.profile_picture
          ? `http://127.0.0.1:8000${c.user.profile_picture}`
          : "/default-avatar.png"
      }
    />
          <div>
            <p className="font-medium">{c.user.username}</p>
            <p>{c.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
