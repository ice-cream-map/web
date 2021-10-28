import { signin, signout } from "../api/authAPI";

export const auth = {
  isAuthenticated,
  getToken,
  login,
  logout,
};

function isAuthenticated() {
  return !!getToken();
}

function getToken() {
  return (
    sessionStorage.getItem("accessToken") || localStorage.getItem("accessToken")
  );
}

async function login({ email, password, rememberMe }) {
  const { token, user } = await signin({ email, password });

  if (rememberMe) {
    localStorage.setItem("accessToken", token);
  } else {
    sessionStorage.setItem("accessToken", token);
  }

  return { token, user };
}

async function logout() {
  await signout();

  sessionStorage.removeItem("accessToken");
  localStorage.removeItem("accessToken");
}
