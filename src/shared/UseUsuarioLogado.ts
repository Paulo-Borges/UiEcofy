import { useContext } from "react";
import { UsuarioLogadoContext } from "../src/shared/contexts";

export const useUsuarioLogado = () => {
  const context = useContext(UsuarioLogadoContext);

  return context;
};
