import React, { createContext, useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom'
import { DataUser, AuxProps, ContextType } from '../components/type/DataUser';
import { register,
          login,
          getAllProduct,
          getAllBands,
          getAllGenres,
          getAllCategories,
        } from './http-commons.ts';

const Context = createContext({} as ContextType);

function AuthProvider({ children }: AuxProps) {

  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  
    
  async function SubmitRegister(data: DataUser) {
    register(data);
  }

 
  async function SubmitLogin(data: DataUser) {
     //salvamos a resposta da funçao "submitLogin" em uma constante e validamos se existe um "token"
    const responseData:any = await login(data);
    if (responseData?.token) {
        //o "token" é armazenado no "localStorage" e o usuário é definido como autenticado.
        localStorage.setItem('token', responseData.token);
        setAuthenticated(true);
    
        navigate('/admin')
      }
  }

  async function GetAllProduct(){ 
    await getAllProduct();
  }

  return (
    <Context.Provider value={{ SubmitRegister, SubmitLogin, authenticated , GetAllProduct }}>
      {children}
    </Context.Provider>
  );
}

const useAuth = () => {
  return useContext(Context)
}


export { Context, AuthProvider , useAuth};