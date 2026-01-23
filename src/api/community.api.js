import axios from "./axios";

export const getCommunities = (params) =>
  axios.get("communities/list/", { params });

export const getCommunityDetail = (id) =>
  axios.get(`communities/${id}/`);

export const createCommunity = (data) =>
  axios.post("communities/create/", data);

export const toggleJoinCommunity = (community_id) =>
  axios.post("communities/join/", { community_id });

export const getCommunityMembers = (id, params) =>
  axios.get(`communities/${id}/members/`, { params });

export const getMyCommunities = () =>
  axios.get("communities/me/");

export const addModerator = (id, username) =>
  axios.post(`communities/${id}/moderators/add/`, { username });
