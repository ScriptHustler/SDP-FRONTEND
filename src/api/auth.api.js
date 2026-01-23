import api from "./axios";

export const login = (data) => {
  return api.post("auth/token/", data);
};

export const register = (formData) => {
  return api.post("auth/register/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getMe = () => {
  return api.get("auth/users/me/");
};

export const logout = async () => {
  const res = await api.post(
    "auth/users/logout/",
    {},
    { withCredentials: true }
  );
  return res.data;
};