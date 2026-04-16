import React, { useState } from 'react';
// Adicionei os ícones Image (para portfólio) e Mail (para contato)
import { Menu, X, User, Home, Image, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#111111] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link to="/" className="flex items-center">
            <div className="flex-shrink-0 h-12 w-12 relative flex items-center justify-center overflow-hidden">
               <img src="/logooficial.png" alt="Logo Toquinho" className="w-full h-full object-contain" />
            </div>
            <div className="ml-4">
              <span className="text-white font-bold tracking-wider uppercase text-sm md:text-base">
                Toquinho <span className="text-red-600">Capoeira</span>
              </span>
            </div>
          </Link>

          {/* Links Desktop - Agora com Portfólio e Contato */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/') ? 'text-white border-b-2 border-red-600' : 'text-gray-300 hover:text-white'}`}>Início</Link>
              <Link to="/Loja" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/Loja') ? 'text-white border-b-2 border-red-600' : 'text-gray-300 hover:text-white'}`}>Loja</Link>
              <Link to="/portfolio" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/portfolio') ? 'text-white border-b-2 border-red-600' : 'text-gray-300 hover:text-white'}`}>Portfólio</Link>
              <Link to="/aluno" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/aluno') ? 'text-white border-b-2 border-red-600' : 'text-gray-300 hover:text-white'}`}>Área do Aluno</Link>
              <Link to="/contato" className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/contato') ? 'text-white border-b-2 border-red-600' : 'text-gray-300 hover:text-white'}`}>Contato</Link>
             
              
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu Mobile - Atualizado */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
             <Link to="/" onClick={() => setIsOpen(false)} className={`flex items-center block px-3 py-4 text-base font-medium ${isActive('/') ? 'text-white border-l-4 border-red-600 bg-red-900/10' : 'text-gray-300'}`}><Home className="mr-3" size={20}/> Início</Link>
             <Link to="/Loja" onClick={() => setIsOpen(false)} className={`flex items-center block px-3 py-4 text-base font-medium ${isActive('/Loja') ? 'text-white border-l-4 border-red-600 bg-red-900/10' : 'text-gray-300'}`}><Mail className="mr-3" size={20}/> Loja</Link>
             <Link to="/portfolio" onClick={() => setIsOpen(false)} className={`flex items-center block px-3 py-4 text-base font-medium ${isActive('/portfolio') ? 'text-white border-l-4 border-red-600 bg-red-900/10' : 'text-gray-300'}`}><Image className="mr-3" size={20}/> Portfólio</Link>
             <Link to="/aluno" onClick={() => setIsOpen(false)} className={`flex items-center block px-3 py-4 text-base font-medium ${isActive('/aluno') ? 'text-white border-l-4 border-red-600 bg-red-900/10' : 'text-gray-300'}`}><User className="mr-3" size={20}/> Área do Aluno</Link>
             <Link to="/contato" onClick={() => setIsOpen(false)} className={`flex items-center block px-3 py-4 text-base font-medium ${isActive('/contato') ? 'text-white border-l-4 border-red-600 bg-red-900/10' : 'text-gray-300'}`}><Mail className="mr-3" size={20}/> Contato</Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;