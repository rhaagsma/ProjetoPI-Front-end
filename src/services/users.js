import api from "./api";
import { getToken } from "./auth";

export async function getUser(id) {
  const tkRes = getToken()
  if (!tkRes) return { error: true };

  try {
    const res = await api.get(`auth/users/${id}`, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      }
    });
    return res.data;
  } catch (error) {
    return { error: true, message: error.message };
  }
}

export async function updateUser(id, data) {
  const tkRes = getToken()
  if (!tkRes) return { error: true };

  try {
    const res = await api.put(`auth/${id}`, data, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      }
    });
    return res.data;
  } catch (error) {
    return { error: true, message: error.message };
  }
}

export async function deleteUser(id) {
  const tkRes = getToken()
  if (!tkRes) return { error: true };

  try {
    const res = await api.delete(`auth/${id}`, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      }
    });
    return res;
  } catch (error) {
    return { error: true, message: error.message };
  }
}