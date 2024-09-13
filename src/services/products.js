import api from "./api";
import { getToken } from "./auth";

export async function getAllProducts() {
  const tkRes = getToken()
  try {
    const res = await api.get("/product", {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function getProductById(id) {
  const tkRes = getToken()
  try {
    const res = await api.get(`/product/${id}`, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function addProduct(data) {
  const tkRes = getToken()
  try {
    const res = await api.post("/product", data, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function updateProduct(id, data) {
  const tkRes = getToken()
  try {
    const res = await api.put(`/product/${id}`, data, {
      headers: {
        authorization: `Bearer${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}

export async function deleteProduct(id) {
  const tkRes = getToken()
  try {
    const res = await api.delete(`/product/${id}`, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}