import axios, { AxiosPromise } from "axios";
import { DataUser } from "../components/Type/DataUser";


const api = axios.create({
    baseURL: `http://localhost:8080/api`,
  });

async function saveUsuario(dataForm: DataUser) {
    await api
      .post("/usuarios", dataForm, {
        headers: {
            "Content-Type": "application/json" 
        },
      })
      .then((response) => {
        return response;
      })
      .catch((erro) => {
        alert("Ocorreu um erro na API:\n" + erro);
        console.log(erro);
      });
}

async function postLogin(dataForm: DataUser) {
    try {
      const {
        data: { token },
      } = await api.post("/login", dataForm, {
        headers: { "Content-Type": "application/json" },
      });
      return { token };
    } catch (erro: unknown) {
      if (axios.isAxiosError(erro)) {
        switch (erro.response?.data) {
          case "Cannot find user":
            alert("Usuário não encontrado");
            break;
          case "Incorrect password":
            alert("Senha incorreta");
            break;
          default:
            alert("Ocorreu um erro na API:\n" + erro);
        }
      }
      console.log(erro);
    }
  }


export {saveUsuario, postLogin}