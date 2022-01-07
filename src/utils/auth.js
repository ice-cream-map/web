import { signin, signout } from "../api/authAPI";

export const auth = {
  isAuthenticated,
  getToken,
  getRoles,
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

function getRoles() {
  return sessionStorage.getItem("roles") || localStorage.getItem("roles");
}

async function login({ email, password, rememberMe }) {
  const { accessToken, user, roles } = await signin({ email, password });

  if (rememberMe) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("roles", roles);
  } else {
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("roles", roles);
  }

  return { accessToken, user, roles };
}

async function logout() {
  await signout();

  sessionStorage.removeItem("accessToken");
  localStorage.removeItem("accessToken");
  sessionStorage.removeItem("roles");
  localStorage.removeItem("roles");
}
