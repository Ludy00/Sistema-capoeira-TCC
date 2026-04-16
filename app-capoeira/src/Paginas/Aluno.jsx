import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  CreditCard, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Heart,
  MessageCircle,
  Share2,
  Clock,
  MapPin,
  CheckCircle,
  MoreHorizontal
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AlunoDashboard() {
  const [abaAtiva, setAbaAtiva] = useState('mural');
  const [sidebarAberta, setSidebarAberta] = useState(false);
  const navigate = useNavigate();

  // Nome dinâmico para personalização
  const nomeAluno = "Ludmyla";

  const menuItems = [
    { id: 'mural', label: 'Mural', icon: LayoutDashboard },
    { id: 'agenda', label: 'Agenda', icon: Calendar },
    { id: 'mensalidade', label: 'Mensalidade', icon: CreditCard },
    { id: 'configuracoes', label: 'Configurações', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col md:flex-row font-sans">
      
      {/* === NAVBAR MOBILE === */}
      <div className="md:hidden bg-[#111] border-b border-gray-800 p-4 flex justify-between items-center sticky top-0 z-50">
        <span className="text-white font-bold uppercase tracking-widest text-xs">Portal do Aluno</span>
        <button onClick={() => setSidebarAberta(!sidebarAberta)} className="text-gray-400">
          {sidebarAberta ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* === SIDEBAR (BARRA LATERAL) === */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-[#111] border-r border-gray-800 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${sidebarAberta ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full p-8">
          
          {/* Header da Sidebar Personalizado */}
          <div className="mb-12 flex flex-col space-y-6">
            <div className="flex items-center space-x-3 opacity-60">
              
            
            </div>
            
            <div className="pl-1">
              
              <h2 className="text-white font-black text-2xl tracking-tight">Olá, {nomeAluno}!</h2>
            </div>
          </div>

          {/* Navegação Principal */}
          <nav className="flex-1 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setAbaAtiva(item.id); setSidebarAberta(false); }}
                className={`w-full flex items-center space-x-4 px-5 py-3.5 rounded-2xl font-bold transition-all text-sm
                  ${abaAtiva === item.id 
                    ? 'bg-red-700 text-white shadow-lg shadow-red-900/20' 
                    : 'text-gray-500 hover:bg-gray-800 hover:text-gray-300'
                  }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Botão Sair */}
          <button 
            onClick={() => navigate('/aluno')}
            className="mt-auto flex items-center space-x-4 px-5 py-4 text-gray-600 hover:text-red-500 hover:bg-red-900/10 rounded-2xl transition-all font-bold text-sm border border-transparent hover:border-red-900/20"
          >
            <LogOut size={20} />
            <span>Sair da Conta</span>
          </button>
        </div>
      </aside>

      {/* === ÁREA DE CONTEÚDO DINÂMICO === */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        
        {/* ABA: MURAL */}
        {abaAtiva === 'mural' && (
          <div className="max-w-3xl mx-auto space-y-10 animate-fadeIn">
            <h2 className="text-2xl font-black text-white uppercase tracking-widest border-l-4 border-red-600 pl-4">Mural do Grupo</h2>
            
            <div className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="/foto-professor.jpg" className="w-11 h-11 rounded-full object-cover border-2 border-red-600/30 p-0.5" alt="Prof" />
                    <div className="ml-3">
                      <p className="font-bold text-white text-sm">Professor Toquinho</p>
                      <p className="text-[10px] text-gray-500 uppercase font-bold">Há 2 horas • Parnaíba</p>
                    </div>
                  </div>
                  <MoreHorizontal className="text-gray-600 cursor-pointer" size={20} />
                </div>
                
                <div className="w-full aspect-video bg-[#050505] relative flex items-center justify-center">
                   <img src="/foto-professor.jpg" className="w-full h-full object-cover opacity-80" alt="Post" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex space-x-5 mb-5">
                    <Heart size={26} className="text-gray-400 hover:text-red-600 cursor-pointer transition-all hover:scale-110" />
                    <MessageCircle size={26} className="text-gray-400 hover:text-white cursor-pointer transition-all hover:scale-110" />
                    <Share2 size={26} className="text-gray-400 hover:text-white cursor-pointer transition-all hover:scale-110" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="font-black text-white mr-2">Professor Toquinho</span>
                   "A arte de transformar o corpo e elevar a mente, onde a alta performance é uma consequência de uma experiência vivida na alma."
                  </p>
                </div>
            </div>
          </div>
        )}

        {/* ABA: AGENDA (Com Mural Semanal) */}
        {abaAtiva === 'agenda' && (
          <div className="max-w-4xl mx-auto space-y-10 animate-fadeIn">
            <h2 className="text-2xl font-black text-white uppercase tracking-widest border-l-4 border-red-600 pl-4">Sua Agenda</h2>
            
            {/* Mural Semanal (Seletor de Dias) */}
            <div className="bg-[#111] p-3 rounded-2xl border border-gray-800 shadow-2xl flex justify-between items-center max-w-2xl mx-auto">
              {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((dia, index) => {
                const isHoje = index === 3; 
                const temTreino = index === 1 || index === 3 || index === 5;
                return (
                  <div key={index} className={`flex flex-col items-center justify-center w-12 h-16 rounded-xl transition-all ${isHoje ? 'bg-red-700 text-white shadow-lg shadow-red-900/40 scale-105' : 'text-gray-600 hover:bg-gray-800'}`}>
                    <span className="text-[10px] font-black mb-1">{dia}</span>
                    <span className="text-sm font-bold">{12 + index}</span>
                    {temTreino && <div className={`w-1 h-1 rounded-full mt-1 ${isHoje ? 'bg-white' : 'bg-red-600'}`}></div>}
                  </div>
                );
              })}
            </div>

            {/* Lista de Treinos do Dia Selecionado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="bg-[#111] rounded-[2rem] border border-gray-800 overflow-hidden relative group hover:border-red-900/40 transition-all duration-500">
                <div className="absolute top-0 left-0 w-2 h-full bg-red-600 shadow-[2px_0_15px_rgba(220,38,38,0.3)]"></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-red-950/30 text-red-500 text-[10px] font-black px-3 py-1.5 rounded-lg border border-red-900/20 uppercase">Turma Adulto</div>
                    <div className="flex items-center text-gray-500 text-xs font-bold"><Clock size={16} className="mr-1.5 text-red-600" /> 19:30 - 21:00</div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 ">Treino de Fundamentos</h3>
                  <div className="flex items-start text-sm text-gray-400 mb-10 min-h-[40px]">
                    <MapPin size={18} className="mr-2 text-red-600 mt-1 flex-shrink-0" />
                    <p className="leading-tight">Sede Muzenza PHB - Joaz Souza</p>
                  </div>
                  <button className="w-full bg-green-900/20 text-green-500 border border-green-900/40 font-black py-4 rounded-2xl flex items-center justify-center transition-all text-xs uppercase tracking-widest">
                    <CheckCircle size={20} className="mr-2" /> Presença Confirmada
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABA: MENSALIDADE */}
        {abaAtiva === 'mensalidade' && (
          <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
            <h2 className="text-2xl font-black text-white uppercase tracking-widest border-l-4 border-red-600 pl-4">Financeiro</h2>
            <div className="bg-[#111] p-12 rounded-[2.5rem] border border-gray-800 text-center space-y-8 shadow-2xl">
              <div className="w-24 h-24 bg-green-900/10 rounded-full flex items-center justify-center mx-auto border border-green-900/30 text-green-500">
                <CreditCard size={48} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white">Tudo em Dia!</h3>
                <p className="text-gray-500 mt-3 text-lg">Sua mensalidade de Abril/2026 já foi computada com sucesso.</p>
              </div>
              <div className="pt-4">
                 <button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl text-xs font-black text-gray-400 uppercase tracking-widest transition-all">Ver Histórico Completo</button>
              </div>
            </div>
          </div>
        )}

        {/* ABA: CONFIGURAÇÕES */}
        {abaAtiva === 'configuracoes' && (
          <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn text-center py-20">
             <div className="w-20 h-20 bg-gray-900 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Settings className="text-gray-600" size={40} />
             </div>
             <h2 className="text-2xl font-black text-white uppercase tracking-widest">Configurações</h2>
             <p className="text-gray-500 max-w-sm mx-auto">Em breve você poderá personalizar suas preferências e dados de perfil aqui.</p>
          </div>
        )}

      </main>

      {/* OVERLAY MOBILE */}
      {sidebarAberta && (
        <div 
          onClick={() => setSidebarAberta(false)} 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden"
        ></div>
      )}
    </div>
  );
}

export default AlunoDashboard;