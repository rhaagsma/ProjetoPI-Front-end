import React, { createContext, useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom'
import { register,
          login,
          getAllProduct,
          getAllBands,
          getAllGenres,
          getAllCategories,
        } from './http-commons.js';

const Context = createContext({});

function AuthProvider({ children }) {

  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);


  async function SubmitRegister(data) {
    register(data);
  }

 
  async function SubmitLogin(data) {
     //salvamos a resposta da funçao "submitLogin" em uma constante e validamos se existe um "token"
    const responseData = await login(data);
      if (responseData?.token && responseData?.userid) {
       
        //o "token" é armazenado no "localStorage" e o usuário é definido como autenticado.
        localStorage.setItem('token', responseData.token);
        localStorage.setItem('userId', responseData.userid);
        setAuthenticated(true);
        navigate('/');
      }
      else {
        alert('Falha na autenticação');
      }
    
  }
  async function Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setAuthenticated(false);
    navigate('/login');
  }
  async function GetAllProduct(){ 
    await getAllProduct();
  }
  async function GetAllBands(){ 
    await getAllBands();
  }
  async function GetAllGenres(){ 
    await getAllGenres();
  }
  async function GetAllCategories(){ 
    await getAllCategories();
  }

  return (
    <Context.Provider value={{ SubmitRegister, SubmitLogin, authenticated, Logout,
                              GetAllProduct, GetAllBands, GetAllGenres, GetAllCategories
                              }}>
      {children}
    </Context.Provider>
  );
}

const useAuth = () => {
  return useContext(Context)
}


export { Context, AuthProvider , useAuth};