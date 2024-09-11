import api from "./api";
import { getToken } from "./auth";

export async function getAllCategories() {
  const tkRes = getToken()
  try {
    const res = await api.get("/category", {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function addCategory(data) {
  const tkRes = getToken()
  try {
    const res = await api.post("/category", data, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function updateCategory(id, data) {
  const tkRes = getToken()
  try {
    const res = await api.put(`/category/${id}`, data, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function deleteCategory(id) {
  const tkRes = getToken()
  try {
    const res = await api.delete(`/category/${id}`, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}