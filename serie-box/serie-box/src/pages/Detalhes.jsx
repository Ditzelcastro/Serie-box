import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { buscarSeriePorId } from "../api/tvmaze.js";
import { Loader, Mensagem } from "../components/Ui.jsx";

export default function Detalhes() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    let ativo = true;
    setCarregando(true);
    setErro("");

    buscarSeriePorId(id)
      .then((dados) => ativo && setSerie(dados))
      .catch((err) => ativo && setErro(err.message))
      .finally(() => ativo && setCarregando(false));

    return () => {
      ativo = false;
    };
  }, [id]);

  if (carregando) return <Loader texto="Carregando detalhes..." />;
  if (erro) return <Mensagem titulo="Erro" descricao={erro} />;
  if (!serie) return null;

  const resumo = serie.summary?.replace(/<[^>]+>/g, "") || "Sem sinopse.";

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        to="/"
        className="mb-4 inline-block text-sm text-amber-300 hover:text-amber-200"
      >
        ← Voltar para a busca
      </Link>

      <div className="flex flex-col gap-6 sm:flex-row">
        {serie.image?.original && (
          <img
            src={serie.image.original}
            alt={`Pôster de ${serie.name}`}
            className="w-full rounded-2xl border border-white/10 sm:w-56"
          />
        )}

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{serie.name}</h1>

          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            {serie.rating?.average && (
              <span className="rounded-lg bg-amber-400/15 px-2 py-1 font-bold text-amber-300">
                ★ {serie.rating.average}
              </span>
            )}
            {serie.status && (
              <span className="rounded-lg bg-white/5 px-2 py-1 text-slate-300">
                {serie.status}
              </span>
            )}
            {serie.premiered && (
              <span className="rounded-lg bg-white/5 px-2 py-1 text-slate-300">
                Estreia: {serie.premiered}
              </span>
            )}
          </div>

          {serie.genres?.length > 0 && (
            <p className="mt-3 text-sm text-slate-400">
              {serie.genres.join(" · ")}
            </p>
          )}

          <p className="mt-4 leading-relaxed text-slate-200">{resumo}</p>
        </div>
      </div>
    </article>
  );
}
