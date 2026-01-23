// src/api/post.api.js
import axios from "./axios";

/**
 * Create a new post
 * Supports TEXT, IMAGE, VIDEO
 * Must be multipart/form-data when image/video is present
 */
export const createPost = async (data) => {
  const res = await axios.post("/posts/create/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

/**
 * Get global feed
 * Supports pagination (?page=)
 */
// export const getFeed = async (page = 1) => {
//   const res = await axios.get(`/posts/feed/?page=${page}`);
//   return res.data;
// };

/**
 * Get community feed
 */
export const getCommunityFeed = async (communityId, page = 1) => {
  const res = await axios.get(
    `/posts/community/${communityId}/?page=${page}`
  );
  return res.data;
};

/**
 * Like / Unlike post (toggle)
 */
export const toggleLike = async (postId) => {
  const res = await axios.post("/posts/like/", {
    post_id: postId,
  });
  return res.data; // { liked: true/false }
};

/**
 * Share post
 */
export const sharePost = async (postId) => {
  const res = await axios.post("/posts/share/", {
    post_id: postId,
  });
  return res.data;
};

/**
 * Add comment to a post
 */
export const addComment = async (postId, content) => {
  const res = await axios.post("/posts/comment/", {
    post_id: postId,
    content,
  });
  return res.data;
};

/**
 * Get comments for a post
 */
export const getComments = async (postId, page = 1) => {
  const res = await axios.get(
    `/posts/${postId}/comments/?page=${page}`
  );
  return res.data;
};



// Edit post
export const editPost = (postId, data) =>
  axios.patch(`/posts/${postId}/edit/`, data);

// Delete post
export const deletePost = (postId) =>
  axios.delete(`/posts/${postId}/delete/`);



export const getCommunityPosts = (communityId, page = 1) =>
  axios.get(`/posts/community/${communityId}/?page=${page}`);

export const createCommunityPost = (communityId, data) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      formData.append(key, value);
    }
  });

  formData.append("community", communityId);

  return axios.post("/posts/create/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}


// Get paginated feed
export const getFeed = async (page = 1, pageSize = 10) => {
  const res = await axios.get(`/posts/feed/?page=${page}&page_size=${pageSize}`);
  return res.data;
};

// Get single post (for refresh after like/comment/share)
export const getPost = async (postId) => {
  const res = await axios.get(`/posts/${postId}/`);
  return res.data;
};
