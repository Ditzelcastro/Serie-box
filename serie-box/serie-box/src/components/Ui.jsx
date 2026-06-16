
export function Loader({ texto = "Carregando..." }) {
  return (
    <div className="flex items-center justify-center gap-3 py-12 text-slate-400">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-600 border-t-amber-400" />
      {texto}
    </div>
  );
}

export function Mensagem({ titulo, descricao }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center">
      <p className="text-lg font-semibold text-white">{titulo}</p>
      {descricao && <p className="mt-1 text-sm text-slate-400">{descricao}</p>}
    </div>
  );
}

const cores = {
  Assistindo: "bg-emerald-400/15 text-emerald-300",
  Concluída: "bg-sky-400/15 text-sky-300",
  "Quero assistir": "bg-amber-400/15 text-amber-300",
};

export function StatusBadge({ status }) {
  const cor = cores[status] || "bg-slate-400/15 text-slate-300";
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${cor}`}>
      {status}
    </span>
  );
}
