import { useState } from "react";
import { Link } from "react-router-dom";
import { useLista } from "../context/ListaContext.jsx";
import ListaItem from "../components/ListaItem.jsx";
import { Mensagem } from "../components/Ui.jsx";

const filtros = ["Todas", "Quero assistir", "Assistindo", "Concluída"];

export default function MinhaLista() {
  const { series, remover, editar } = useLista();
  const [filtro, setFiltro] = useState("Todas");
  const [busca, setBusca] = useState("");

  const visiveis = series
    .filter((s) => filtro === "Todas" || s.status === filtro)
    .filter((s) => s.nome.toLowerCase().includes(busca.toLowerCase()));

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">
          Minha lista{" "}
          <span className="text-sm font-normal text-slate-400">
            ({series.length})
          </span>
        </h1>
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar na lista..."
          className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-amber-400/60"
        />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {filtros.map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              filtro === f
                ? "bg-amber-400 text-[#0e1116]"
                : "bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {series.length === 0 ? (
        <Mensagem
          titulo="Sua lista está vazia"
          descricao="Busque uma série ou cadastre manualmente para começar."
        />
      ) : visiveis.length === 0 ? (
        <Mensagem titulo="Nada por aqui com esse filtro" />
      ) : (
        <div className="flex flex-col gap-3">
          {visiveis.map((serie) => (
            <ListaItem
              key={serie.id}
              serie={serie}
              onRemover={remover}
              onEditarStatus={(id, status) => editar(id, { status })}
            />
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link
          to="/cadastro"
          className="text-sm font-medium text-amber-300 hover:text-amber-200"
        >
          + Cadastrar nova série
        </Link>
      </div>
    </section>
  );
}
