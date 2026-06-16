import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLista } from "../context/ListaContext.jsx";

const estadoInicial = {
  nome: "",
  genero: "",
  status: "Quero assistir",
  nota: "",
  comentario: "",
};

export default function Cadastro() {
  const [form, setForm] = useState(estadoInicial);
  const [erros, setErros] = useState({});
  const { adicionar } = useLista();
  const navigate = useNavigate();

  function atualizar(campo, valor) {
    setForm((atual) => ({ ...atual, [campo]: valor }));
  }

  function validar() {
    const novosErros = {};

    if (!form.nome.trim()) {
      novosErros.nome = "Informe o nome da série.";
    } else if (form.nome.trim().length < 2) {
      novosErros.nome = "O nome deve ter pelo menos 2 caracteres.";
    }

    if (form.nota !== "") {
      const nota = Number(form.nota);
      if (Number.isNaN(nota) || nota < 0 || nota > 10) {
        novosErros.nota = "A nota deve ser um número entre 0 e 10.";
      }
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validar()) return;

    adicionar({
      nome: form.nome.trim(),
      genero: form.genero.trim(),
      status: form.status,
      nota: form.nota === "" ? 0 : Number(form.nota),
      comentario: form.comentario.trim(),
      imagem: "",
    });

    navigate("/minha-lista");
  }

  const inputClasse =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 outline-none placeholder:text-slate-500 focus:border-amber-400/60";

  return (
    <section className="mx-auto max-w-xl">
      <h1 className="mb-1 text-2xl font-bold">Cadastrar série</h1>
      <p className="mb-6 text-sm text-slate-400">
        Adicione manualmente uma série à sua lista pessoal.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        <div>
          <label className="mb-1 block text-sm font-medium">Nome *</label>
          <input
            type="text"
            value={form.nome}
            onChange={(e) => atualizar("nome", e.target.value)}
            placeholder="Ex.: The Office"
            className={inputClasse}
          />
          {erros.nome && (
            <p className="mt-1 text-xs text-red-400">{erros.nome}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Gênero</label>
          <input
            type="text"
            value={form.genero}
            onChange={(e) => atualizar("genero", e.target.value)}
            placeholder="Ex.: Comédia, Drama"
            className={inputClasse}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Status</label>
            <select
              value={form.status}
              onChange={(e) => atualizar("status", e.target.value)}
              className={inputClasse}
            >
              <option>Quero assistir</option>
              <option>Assistindo</option>
              <option>Concluída</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Nota (0–10)</label>
            <input
              type="number"
              min="0"
              max="10"
              step="0.1"
              value={form.nota}
              onChange={(e) => atualizar("nota", e.target.value)}
              placeholder="Opcional"
              className={inputClasse}
            />
            {erros.nota && (
              <p className="mt-1 text-xs text-red-400">{erros.nota}</p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Comentário</label>
          <textarea
            rows="3"
            value={form.comentario}
            onChange={(e) => atualizar("comentario", e.target.value)}
            placeholder="O que achou? Anotações..."
            className={`${inputClasse} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-amber-400 px-5 py-3 font-semibold text-[#0e1116] transition hover:bg-amber-300"
        >
          Salvar na minha lista
        </button>
      </form>
    </section>
  );
}
