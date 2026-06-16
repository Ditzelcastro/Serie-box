import { Link } from "react-router-dom";

export default function SerieCard({ serie, onAdicionar }) {
  const imagem = serie.image?.medium;
  const generos = serie.genres?.join(", ") || "Sem gênero";
  const nota = serie.rating?.average;

  return (
    <article className="fade-up flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-amber-400/40">
      <Link to={`/serie/${serie.id}`} className="block">
        <div className="aspect-[2/3] w-full overflow-hidden bg-slate-800">
          {imagem ? (
            <img
              src={imagem}
              alt={`Pôster de ${serie.name}`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          ) : (
            <div className="grid h-full place-items-center text-slate-500">
              Sem imagem
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight">{serie.name}</h3>
          {nota && (
            <span className="shrink-0 rounded-md bg-amber-400/15 px-1.5 py-0.5 text-xs font-bold text-amber-300">
              ★ {nota}
            </span>
          )}
        </div>
        <p className="text-xs text-slate-400">{generos}</p>

        <button
          onClick={() => onAdicionar(serie)}
          className="mt-auto rounded-lg bg-amber-400 px-3 py-2 text-sm font-semibold text-[#0e1116] transition hover:bg-amber-300"
        >
          Adicionar à lista
        </button>
      </div>
    </article>
  );
}
