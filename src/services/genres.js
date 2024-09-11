import api from "./api";
import { getToken } from "./auth";

export async function getAllGenres() {
  const tkRes = getToken()
  try {
    const res = await api.get("/genre", {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function addGenre(data) {
  const tkRes = getToken()
  try {
    const res = await api.post("/genre", data, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function updateGenre(id, data) {
  const tkRes = getToken()
  try {
    const res = await api.put(`/genre/${id}`, data, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function deleteGenre(id) {
  const tkRes = getToken()
  try {
    const res = await api.delete(`/genre/${id}`, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}