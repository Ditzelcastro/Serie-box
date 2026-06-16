import { StatusBadge } from "./Ui.jsx";

export default function ListaItem({ serie, onRemover, onEditarStatus }) {
  return (
    <article className="fade-up flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="h-24 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-800">
        {serie.imagem ? (
          <img
            src={serie.imagem}
            alt={`Pôster de ${serie.nome}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full place-items-center text-[10px] text-slate-500">
            Sem
            <br />
            imagem
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold">{serie.nome}</h3>
          <StatusBadge status={serie.status} />
          {serie.nota > 0 && (
            <span className="text-sm text-amber-300">★ {serie.nota}/10</span>
          )}
        </div>

        {serie.genero && (
          <p className="text-xs text-slate-400">{serie.genero}</p>
        )}
        {serie.comentario && (
          <p className="text-sm text-slate-300">{serie.comentario}</p>
        )}

        <div className="mt-1 flex flex-wrap items-center gap-2">
          <label className="text-xs text-slate-400">
            Status:{" "}
            <select
              value={serie.status}
              onChange={(e) => onEditarStatus(serie.id, e.target.value)}
              className="rounded-md border border-white/10 bg-[#0e1116] px-2 py-1 text-xs text-white"
            >
              <option>Quero assistir</option>
              <option>Assistindo</option>
              <option>Concluída</option>
            </select>
          </label>

          <button
            onClick={() => onRemover(serie.id)}
            className="rounded-md px-2 py-1 text-xs font-medium text-red-300 transition hover:bg-red-400/10"
          >
            Remover
          </button>
        </div>
      </div>
    </article>
  );
}
