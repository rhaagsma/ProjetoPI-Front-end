import api from "./api";
import { getToken } from "./auth";

export async function finalizeC(data) {
  const tkRes = getToken()
  try {
    const res = await api.post("/order", data, {
      headers: {
        authorization: `Bearer ${tkRes}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error: true, message: error.message }; 
  }
}