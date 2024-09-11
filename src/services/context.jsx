import React, { createContext, useState, useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'
import {
          getAllProduct,
          getAllBands,
          getAllGenres,
          getAllCategories,
          getAllShowcases,
        } from './http-commons.js';
import { isLogged, login, register } from './auth.js';
import { useToast } from 'src/hooks/use-toast.js';

const Context = createContext({});

function AuthProvider({ children }) {
  const { toast } = useToast();

  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const auth = await isLogged();
      setAuthenticated(auth);
    }
    checkAuth();
  }, [])

  async function SubmitRegister(data) {
    if(!data.login || !data.password || !data.email || !data.telephone){
      toast({
        title: 'Ops! Houve um erro',
        description: 'Preencha todos os campos para realizar o login.',
        variant: 'destructive',
      })
      return;
    }

    const res = await register(data);
    if (res.error) {
      toast({
        title: 'Ops! Houve um erro',
        description: 'Não foi possível realizar seu cadastro. Por favor, tente novamente.',
        variant: 'destructive',
      })
      return;
    }

    setAuthenticated(true);
    navigate('/');
  }

 
  async function SubmitLogin(data) {
    if(!data.login || !data.password){
      toast({
        title: 'Ops! Houve um erro',
        description: 'Preencha todos os campos para realizar o login.',
        variant: 'destructive',
      })
      return;
    }

    const res = await login(data);
    if (res.error) {
      toast({
        title: 'Ops! Houve um erro',
        description: 'Não foi possível realizar o login. Por favor, tente novamente.',
        variant: 'destructive',
      })
      return;
    }

    setAuthenticated(true);
    navigate('/');
  }

  async function Logout(){
    localStorage.removeItem('@pidisco:token');
    localStorage.removeItem('@pidisco:userId');
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
  async function GetAllShowcases(){ 
    await getAllShowcases();
  }

  return (
    <Context.Provider value={{ SubmitRegister, SubmitLogin, authenticated, Logout,
                              GetAllProduct, GetAllBands, GetAllGenres, GetAllCategories, GetAllShowcases
                              }}>
      {children}
    </Context.Provider>
  );
}

const useAuth = () => {
  return useContext(Context)
}


export { Context, AuthProvider , useAuth};