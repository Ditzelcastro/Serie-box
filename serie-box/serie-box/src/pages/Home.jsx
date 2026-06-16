import { useState } from "react";
import { buscarSeries } from "../api/tvmaze.js";
import { useLista } from "../context/ListaContext.jsx";
import SerieCard from "../components/SerieCard.jsx";
import { Loader, Mensagem } from "../components/Ui.jsx";

export default function Home() {
  const [termo, setTermo] = useState("");
  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [buscou, setBuscou] = useState(false);

  const { adicionar } = useLista();

  async function handleBuscar(e) {
    e.preventDefault();
    if (!termo.trim()) return;

    setCarregando(true);
    setErro("");
    try {
      const dados = await buscarSeries(termo.trim());
      setResultados(dados);
      setBuscou(true);
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  }

  function adicionarNaLista(serie) {
    adicionar({
      nome: serie.name,
      genero: serie.genres?.join(", ") || "",
      imagem: serie.image?.medium || "",
      nota: serie.rating?.average || 0,
      status: "Quero assistir",
      comentario: "",
    });
    alert(`"${serie.name}" foi adicionada à sua lista!`);
  }

  return (
    <section>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Encontre sua próxima <span className="text-amber-400">série</span>
        </h1>
        <p className="mt-2 text-slate-400">
          Busque, salve e acompanhe tudo o que você está assistindo.
        </p>
      </div>

      <form onSubmit={handleBuscar} className="mx-auto mb-8 flex max-w-xl gap-2">
        <input
          type="text"
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          placeholder="Ex.: Breaking Bad, Dark, One Piece..."
          className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none placeholder:text-slate-500 focus:border-amber-400/60"
        />
        <button
          type="submit"
          className="rounded-xl bg-amber-400 px-5 font-semibold text-[#0e1116] transition hover:bg-amber-300"
        >
          Buscar
        </button>
      </form>

      {carregando && <Loader texto="Buscando séries..." />}
      {erro && <Mensagem titulo="Algo deu errado" descricao={erro} />}

      {!carregando && buscou && resultados.length === 0 && !erro && (
        <Mensagem
          titulo="Nenhuma série encontrada"
          descricao="Tente outro termo de busca."
        />
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {resultados.map((serie) => (
          <SerieCard
            key={serie.id}
            serie={serie}
            onAdicionar={adicionarNaLista}
          />
        ))}
      </div>
    </section>
  );
}
