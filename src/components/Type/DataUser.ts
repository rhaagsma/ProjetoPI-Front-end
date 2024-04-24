import { AxiosResponse } from "axios";

export type DataUser = {
  nome: string;
  email: string;
  senha: string;
  
};

export type AuxProps = {
  children: React.ReactNode;
};

export type ContextType = {
  SubmitSignUp: (data: DataUser) => Promise<void | AxiosResponse>;
  SubmitLogin: (data: DataUser) => Promise<void | AxiosResponse>;
  authenticated: boolean;
  GetAllPoint: () => Promise<void | AxiosResponse>;
};