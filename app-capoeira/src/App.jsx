import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importando nossos componentes e páginas exatamente com os nomes do seu print
import Navbar from "./componentes/navbar";
import PaginaInicial from "./Paginas/PaginaInicial";
import AlunoDashboard from "./Paginas/Aluno";
import Portfolio from "./Paginas/Portfolio";
import AdminDashboard from "./Paginas/AdminDashboard";
import Loja from "./Paginas/Loja";
import Contato from "./Paginas/Contato";
import LoginAluno from "./Paginas/LoginAluno";

function App() {
  return (
    <Router>
      {/* O Fundo Escuro agora abraça o site inteiro */}
      <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans flex flex-col">
        {/* A Navbar fica fixa em cima de todas as páginas */}
        <Navbar />

        {/* Aqui é o 'miolo' do site, onde as páginas trocam */}
        <div className="flex-1">
          <Routes>
            {/* O path="/" é a raiz do site, o que abre de primeira */}
            <Route path="/" element={<PaginaInicial />} />

            {/* A rota /aluno agora leva para a tela de Login */}
            <Route path="/aluno" element={<LoginAluno />} />

            {/* E o Dashboard de verdade passa a ficar "escondido" numa rota /painel-aluno */}
            <Route path="/painel-aluno" element={<AlunoDashboard />} />

            <Route path="/Portfolio" element={<Portfolio />} />

            <Route path="/Admin" element={<AdminDashboard />} />

            <Route path="/Loja" element={<Loja />} />

            <Route path="/Contato" element={<Contato />} />

            {/* Futuramente você adiciona as outras rotas aqui: */}
            {/* <Route path="/loja" element={<Loja />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
