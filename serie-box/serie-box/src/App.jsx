import { Routes, Route, Link } from "react-router-dom";
import { ListaProvider } from "./context/ListaContext.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import MinhaLista from "./pages/MinhaLista.jsx";
import Detalhes from "./pages/Detalhes.jsx";

function NaoEncontrada() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-bold">Página não encontrada</h1>
      <Link to="/" className="mt-3 inline-block text-amber-300">
        Voltar ao início
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <ListaProvider>
      <div className="min-h-screen">
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/minha-lista" element={<MinhaLista />} />
            <Route path="/serie/:id" element={<Detalhes />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </main>
        <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
          SérieBox · Projeto acadêmico · Dados via API TVMaze
        </footer>
      </div>
    </ListaProvider>
  );
}
