const API_ROOT = "http://13.233.236.31/api/v1";

export const APIUrls = {
  login: () => `${API_ROOT}/users/create-session`,
  signup: () => `${API_ROOT}/users/signupform`,
  fetchPosts: (page=1, limit=5) =>
    //make it a function so that it can be dynamic
    `${API_ROOT}/posts?pages=${page}&limit=${limit}`,
};
