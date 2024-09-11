import api from "./api";
import { getToken } from "./auth";

export async function getAllAddresses(id) {
  const tkRes = getToken()
  try {
    const res = await api.get(`/address/user/${id}`, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function updateAddress(id, data) {
  const tkRes = getToken()
  try {
    const res = await api.put(`/address/${id}`, data, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function deleteAddress(id) {
  const tkRes = getToken()
  try {
    const res = await api.delete(`/address/${id}`, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function addAddress(data) {
  const tkRes = getToken()
  try {
    const res = await api.post("/address", data, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}