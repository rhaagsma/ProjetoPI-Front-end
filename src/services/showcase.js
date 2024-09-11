import api from "./api";
import { getToken } from "./auth";

export async function getAllShowcases() {
  const tkRes = getToken()
  try {
    const res = await api.get("/showcase", {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function addShowcase(data) {
  const tkRes = getToken()
  try {
    const res = await api.post("/showcase", data, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function updateShowcase(id, data) {
  const tkRes = getToken()
  try {
    const res = await api.put(`/showcase/${id}`, data, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function deleteShowcase(id) {
  const tkRes = getToken()
  try {
    const res = await api.delete(`/showcase/${id}`, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}