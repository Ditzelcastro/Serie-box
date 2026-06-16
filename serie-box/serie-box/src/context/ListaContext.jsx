import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const ListaContext = createContext(null);

function gerarId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export function ListaProvider({ children }) {
  const [series, setSeries] = useLocalStorage("serie-box:lista", []);

  function adicionar(serie) {
    const nova = { ...serie, id: gerarId() };
    setSeries((atual) => [nova, ...atual]);
    return nova;
  }

  function editar(id, dados) {
    setSeries((atual) =>
      atual.map((s) => (s.id === id ? { ...s, ...dados } : s))
    );
  }

  function remover(id) {
    setSeries((atual) => atual.filter((s) => s.id !== id));
  }

  function buscarPorId(id) {
    return series.find((s) => s.id === id);
  }

  const valor = { series, adicionar, editar, remover, buscarPorId };
  return <ListaContext.Provider value={valor}>{children}</ListaContext.Provider>;
}

export function useLista() {
  const ctx = useContext(ListaContext);
  if (!ctx) throw new Error("useLista deve ser usado dentro de ListaProvider");
  return ctx;
}
