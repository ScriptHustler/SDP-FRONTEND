import api from "./axios";

export const getUserProfile = (username) => {
  return api.get(`auth/users/${username}/`);
};

export const toggleFollow = (username) => {
  return api.post("auth/users/follow/", { username });
};

// Check if current user is following target
export const isFollowing = (username) => {
  return api.get(`auth/users/${username}/`, { withCredentials: true });
  // backend should return user info (we'll use `followers` or custom field)
};

export const searchUsers = (query) => {
  return api.get("auth/users/search/", { params: { q: query }, withCredentials: true });
};

// Get paginated followers
export const getFollowers = (username, page = 1) => {
  return api.get(`auth/users/${username}/followers/`, { params: { page }, withCredentials: true });
};

// Get following
export const getFollowing = (username) => {
  return api.get(`auth/users/${username}/following/`, { withCredentials: true });
};

export const updateProfile = (formData) => {
  return api.put("auth/users/me/update/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
};