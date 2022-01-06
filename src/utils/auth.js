import { signin, signout } from "../api/authAPI";

export const auth = {
  isAuthenticated,
  getToken,
  getRole,
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

function getRole() {
  return sessionStorage.getItem("role") || localStorage.getItem("role");
}

async function login({ email, password, rememberMe }) {
  const { accessToken, user, roles } = await signin({ email, password });

  if (rememberMe) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("role", ...roles);
  } else {
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("role", ...roles);
  }

  return { accessToken, user, roles };
}

async function logout() {
  await signout();

  sessionStorage.removeItem("accessToken");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("role");
  sessionStorage.removeItem("role");
}
