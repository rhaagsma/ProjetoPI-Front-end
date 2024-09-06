import axios from "axios";
// import { DataUser } from "../components/type/DataUser";
// import { DataProduct, Band, Genre, Category } from "../components/type/DataProduct";

const api = axios.create({
  baseURL: `http://localhost:8081`,
});

api.interceptors.request.use(async (config) => {

  const token = localStorage.getItem("token");

  if(config.url && (config.url.startsWith("/auth/register") ||
   config.url.startsWith("/auth/login") ||
    config.url.startsWith("/product") ||
    config.url.startsWith("/product/") ||
     config.url.startsWith("/band") ||
      config.url.startsWith("/category") ||
        config.url.startsWith("/genre")
    )){
    return config;
  }

  if (token && config.headers) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

// Product API
async function getAllProduct() {
  return await api
    .get("/product", {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.data);
}

async function getProduct(id) {
  return await api
    .get(`/product/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.data);
}

async function saveProduct(dataForm) {
  return await api
    .post("/product", dataForm, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function updateProduct(id, dataForm) {
  return await api
    .put(`/product/${id}`, dataForm, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function deleteProduct(id) {
  return await api
    .delete(`/product/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

// User API

async function getUser(id) {
  return await api
    .get(`/auth/users/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.data);
}
async function register(dataForm) {
  console.log(dataForm);
  try {
    const response = await api.post("/auth/register", dataForm, {
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    alert("Ocorreu um erro na API:\n" + error);
    
    return null;
  }
}

async function login(dataForm) {
  try {
    const response = await api.post("/auth/login", dataForm, {
      headers: { "Content-Type": "application/json" },
    });
    const token = response.data?.token ?? null;
    const userid = response.data?.id ?? null;
    return { token, userid };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      switch (error.response?.data) {
        case "Cannot find user":
          alert("Usuário não encontrado");
          break;
        case "Incorrect password":
          alert("Senha incorreta");
          break;
        default:
          alert("Ocorreu um erro na API:\n" + error);
      }
    } else {
      alert("Ocorreu um erro inesperado:\n" + error);
    }
    console.log(error);
    return null;
  }
}
async function deleteUser(id) {
  return await api
   .delete(`/auth/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
   .then((response) => response)
   .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}
async function updateUser(id, dataForm) {
  return await api
   .put(`/auth/${id}`, dataForm,{
      headers: { "Content-Type": "application/json" },
    })
   .then((response) => response)
   .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function getBand(id) {
  return await api
    .get(`/band/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.data);
}

// Band API
async function getAllBands() {
  return await api
    .get("/band", {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.data);
}

async function saveBand(dataForm) {
  return await api
    .post("/band", dataForm, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function updateBand(id, dataForm) {
  return await api
    .put(`/band/${id}`, dataForm, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function deleteBand(id) {
  return await api
    .delete(`/band/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function getGenre(id) {
  return await api
    .get(`/genre/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.data);
}

// Genre API
async function getAllGenres() {
  return await api
    .get("/genre", {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.data);
}

async function saveGenre(dataForm) {
  return await api
    .post("/genre", dataForm, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function updateGenre(id, dataForm) {
  return await api
    .put(`/genre/${id}`, dataForm, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function deleteGenre(id) {
  return await api
    .delete(`/genre/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function getCategory(id) {
  return await api
    .get(`/category/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.data);
}

// Category API
async function getAllCategories() {
  return await api
    .get("/category", {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.data);
}

async function saveCategory(dataForm) {
  return await api
    .post("/category", dataForm, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function updateCategory(id, dataForm) {
  return await api
    .put(`/category/${id}`, dataForm, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function deleteCategory(id) {
  return await api
    .delete(`/category/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

export {
  register,
  login,
  deleteUser,
  getUser,
  updateUser,
  

  getProduct,
  getAllProduct,
  saveProduct,
  updateProduct,
  deleteProduct,

  getBand,
  getAllBands,
  saveBand,
  updateBand,
  deleteBand,

  getGenre,
  getAllGenres,
  saveGenre,
  updateGenre,
  deleteGenre,
  
  getCategory,
  getAllCategories,
  saveCategory,
  updateCategory,
  deleteCategory,
};
