import { NavLink } from "react-router-dom";

export default function Header() {
  const linkBase =
    "px-3 py-2 rounded-lg text-sm font-medium transition-colors";
  const estilo = ({ isActive }) =>
    isActive
      ? `${linkBase} bg-amber-400/15 text-amber-300`
      : `${linkBase} text-slate-300 hover:text-white hover:bg-white/5`;

  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0e1116]/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-400 font-black text-[#0e1116]">
            S
          </span>
          <span className="text-lg font-bold tracking-tight">
            Série<span className="text-amber-400">Box</span>
          </span>
        </NavLink>

        <div className="flex items-center gap-1">
          <NavLink to="/" end className={estilo}>
            Buscar
          </NavLink>
          <NavLink to="/cadastro" className={estilo}>
            Cadastrar
          </NavLink>
          <NavLink to="/minha-lista" className={estilo}>
            Minha lista
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
