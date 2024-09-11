import api from "./api";
import { getToken } from "./auth";

export async function getAllBands() {
  const tkRes = getToken()
  try {
    const res = await api.get("/band", {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function addBand(data) {
  const tkRes = getToken()
  try {
    const res = await api.post("/band", data, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function updateBand(id, data) {
  const tkRes = getToken()
  try {
    const res = await api.put(`/band/${id}`, data, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error)
    return { error: true, message: error.message }; 
  }
}

export async function deleteBand(id) {
  const tkRes = getToken()
  try {
    const res = await api.delete(`/band/${id}`, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}
