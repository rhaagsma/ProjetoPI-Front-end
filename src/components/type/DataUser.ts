import { AxiosResponse } from "axios";

export type DataUser = {
  username: string;
  password: string;
};

export type AuxProps = {
  children: React.ReactNode;
};

export type ContextType = {
  SubmitRegister: (data: DataUser) => Promise<void | AxiosResponse>;
  SubmitLogin: (data: DataUser) => Promise<void | AxiosResponse>;
  authenticated: boolean;
  GetAllProduct: () => Promise<void | AxiosResponse>;
};
