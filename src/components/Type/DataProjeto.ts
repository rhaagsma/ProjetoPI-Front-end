export type Projeto = {
  nome: string;
  categoria: string;
  usuario: string;
  cena: string;
};
export type Cena = {
  idCena: string;
  nome: string;
  projeto: Projeto;
  escolha1: Cena;
  escolha2: Cena;
};

export type DataCategoria = {
  nome: string;
};
