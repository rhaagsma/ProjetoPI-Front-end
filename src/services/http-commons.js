import axios from "axios";
// import { DataUser } from "../components/type/DataUser";
// import { DataProduct, Band, Genre, Category } from "../components/type/DataProduct";

const api = axios.create({
  baseURL: `http://localhost:8081`,
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

async function updateProduct(dataForm) {
  return await api
    .put("/product", dataForm, {
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
async function register(dataForm) {
  return await api
    .post("/usuarios", dataForm, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function login(dataForm) {
  try {
    const { data: { token } } = await api.post("/login", dataForm, {
      headers: { "Content-Type": "application/json" },
    });
    return { token };
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
    }
    console.log(error);
  }
}

// Band API
async function getAllBands() {
  return await api
    .get("/bands", {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.data);
}

async function saveBand(dataForm) {
  return await api
    .post("/bands", dataForm, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function updateBand(dataForm) {
  return await api
    .put("/bands", dataForm, {
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
    .delete(`/bands/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

// Genre API
async function getAllGenres() {
  return await api
    .get("/genres", {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.data);
}

async function saveGenre(dataForm) {
  return await api
    .post("/genres", dataForm, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function updateGenre(dataForm) {
  return await api
    .put("/genres", dataForm, {
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
    .delete(`/genres/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

// Category API
async function getAllCategories() {
  return await api
    .get("/categories", {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.data);
}

async function saveCategory(dataForm) {
  return await api
    .post("/categories", dataForm, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response)
    .catch((error) => {
      alert("Ocorreu um erro na API:\n" + error);
      console.log(error);
    });
}

async function updateCategory(dataForm) {
  return await api
    .put("/categories", dataForm, {
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
    .delete(`/categories/${id}`, {
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
  getAllProduct,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct,
  getAllBands,
  saveBand,
  updateBand,
  deleteBand,
  getAllGenres,
  saveGenre,
  updateGenre,
  deleteGenre,
  getAllCategories,
  saveCategory,
  updateCategory,
  deleteCategory,
};
