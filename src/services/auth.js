import api from "./api";

// Faz o login com os dados contidos no objeto data
export async function login(data) {
  try {
    const res = await api.post("/auth/login", data);
    if (res.status === 200) {
      localStorage.setItem("@pidisco:token", res.data.token);
      localStorage.setItem("@pidisco:userId", res.data.id);
      return { error: false };
    } else {
      return { error: true, message: res.data.message };
    }
  } catch (err) {
    return { error: true, message: err.message };
  }
}

export async function register(data) {
  try {
    const res = await api.post("/auth/register", data);
    if (res.status === 200) {
      return await login({
        login: data.login,
        password: data.password,
      });
    } else {
      return { error: true, message: res.data.message };
    }
  } catch (error) {
    return { error: true, message: error.message };
  }
}

export async function isLogged() {
  const token = localStorage.getItem('@pidisco:token');
  if(token){
    return true;
  }
  return false;
}

export function getToken() {
  const token = localStorage.getItem('@pidisco:token');
  if (!token) {
    return;
  }

  return token;
}

export function getUserId() {
  const userId = localStorage.getItem('@pidisco:userId');
  if (!userId) {
    return;
  }

  return userId;
}