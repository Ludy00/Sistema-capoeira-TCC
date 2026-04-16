import React, { useState } from 'react';
import { 
  Users, 
  DollarSign, 
  Calendar, 
  ImagePlus, 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  CheckCircle,
  XCircle,
  Clock,
  Send,
  Plus,
  Heart,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [abaAtiva, setAbaAtiva] = useState('inicio');
  const [sidebarAberta, setSidebarAberta] = useState(false);
  const navigate = useNavigate();

  // Itens do Menu Lateral
  const menuItems = [
    { id: 'inicio', label: 'Início', icon: LayoutDashboard },
    { id: 'alunos', label: 'Gestão de Alunos', icon: Users },
    { id: 'financeiro', label: 'Financeiro', icon: DollarSign },
    { id: 'agenda', label: 'Cronograma', icon: Calendar },
    { id: 'feed', label: 'Mural / Feed', icon: ImagePlus },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col md:flex-row font-sans">
      
      {/* === NAVBAR MOBILE === */}
      <div className="md:hidden bg-[#111] border-b border-gray-800 p-4 flex justify-between items-center sticky top-0 z-50">
        <span className="text-white font-bold uppercase tracking-widest text-sm">Painel do Professor</span>
        <button onClick={() => setSidebarAberta(!sidebarAberta)} className="text-gray-400">
          {sidebarAberta ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* === SIDEBAR ADMINISTRATIVA === */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-[#111] border-r border-gray-800 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${sidebarAberta ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full p-6">
          <div className="mb-10 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/20">
              <span className="text-white font-black text-xl">P</span>
            </div>
            <div>
              <p className="text-white font-bold uppercase tracking-tighter leading-none">Professor Toquinho</p>
              <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-1">Administrador</p>
            </div>
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setAbaAtiva(item.id); setSidebarAberta(false); }}
                className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl font-medium transition-all
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

          <button 
            onClick={() => navigate('/aluno')} 
            className="mt-auto flex items-center space-x-4 px-4 py-3 text-gray-500 hover:text-red-500 hover:bg-red-900/10 rounded-xl transition-all font-medium"
          >
            <LogOut size={20} />
            <span>Sair do Painel</span>
          </button>
        </div>
      </aside>

      {/* === ÁREA DE CONTEÚDO PRINCIPAL === */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        
        {/* ABA: INÍCIO */}
        {abaAtiva === 'inicio' && (
          <div className="max-w-6xl mx-auto space-y-10 animate-fadeIn">
            <header>
              <h2 className="text-3xl font-black text-white uppercase tracking-widest border-l-4 border-red-600 pl-4">Visão Geral</h2>
             
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#111] p-8 rounded-3xl border border-gray-800">
                <Users className="text-red-600 mb-4" size={32} />
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Alunos Ativos</p>
                <h3 className="text-4xl font-black text-white mt-1">42</h3>
              </div>
              <div className="bg-[#111] p-8 rounded-3xl border border-gray-800">
                <DollarSign className="text-green-500 mb-4" size={32} />
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Receita Mensal</p>
                <h3 className="text-4xl font-black text-white mt-1">R$ 3.360</h3>
              </div>
              <div className="bg-red-900/10 p-8 rounded-3xl border border-red-900/30">
                <Clock className="text-red-500 mb-4" size={32} />
                <p className="text-red-400 text-[10px] font-black uppercase tracking-widest">Presenças Hoje</p>
                <h3 className="text-4xl font-black text-white mt-1">12</h3>
              </div>
            </div>
          </div>
        )}

        {/* ABA: ALUNOS */}
        {abaAtiva === 'alunos' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
            <h2 className="text-2xl font-black text-white uppercase tracking-widest border-l-4 border-red-600 pl-4">Gestão de Alunos</h2>
            
            <div className="bg-[#111] rounded-3xl border border-gray-800 overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-gray-800 bg-[#161616] flex justify-between items-center">
                <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest">Solicitações Pendentes</h3>
                <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">2 Novas</span>
              </div>
              <div className="divide-y divide-gray-800">
                {[
                  { id: 1, nome: 'Milena Silva', idade: 14, tipo: 'Infantil' },
                  { id: 2, nome: 'João Pedro', idade: 22, tipo: 'Adulto' }
                ].map(aluno => (
                  <div key={aluno.id} className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4 hover:bg-[#1a1a1a] transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center font-bold text-gray-400 text-lg">
                        {aluno.nome.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-bold">{aluno.nome}</p>
                        <p className="text-xs text-gray-500">{aluno.idade} anos • Turma {aluno.tipo}</p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-xl transition-all text-xs font-bold uppercase flex items-center">
                        <CheckCircle size={16} className="mr-2"/> Aprovar
                      </button>
                      <button className="bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white px-4 py-2 rounded-xl transition-all text-xs font-bold uppercase flex items-center">
                        <XCircle size={16} className="mr-2"/> Recusar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ABA: AGENDA */}
        {abaAtiva === 'agenda' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-black text-white uppercase tracking-widest border-l-4 border-red-600 pl-4">Cronograma Semanal</h2>
              <button className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center">
                <Plus size={16} className="mr-2" /> Novo Horário
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Segunda', 'Quarta', 'Sexta'].map(dia => (
                <div key={dia} className="bg-[#111] p-6 rounded-3xl border border-gray-800 space-y-4">
                  <h3 className="text-red-500 font-black uppercase tracking-widest text-xs border-b border-gray-800 pb-2">{dia}</h3>
                  <div className="p-4 bg-[#1a1a1a] rounded-2xl border border-gray-800 relative group">
                     <p className="text-white font-bold text-sm">Turma Adulto</p>
                     <p className="text-gray-500 text-[10px] uppercase mt-1">19:30 - Sede PHB</p>
                     <button className="absolute top-4 right-4 text-gray-700 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <X size={14}/>
                     </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABA: FEED (Com Visualização) */}
        {abaAtiva === 'feed' && (
          <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn">
            <h2 className="text-2xl font-black text-white uppercase tracking-widest border-l-4 border-red-600 pl-4">Mural do Grupo</h2>
            
            {/* Criar Post */}
            <div className="bg-[#111] p-8 rounded-3xl border border-gray-800 shadow-2xl space-y-6">
              <h3 className="text-white font-bold uppercase text-xs tracking-widest">Nova Publicação</h3>
              <textarea 
                placeholder="O que você quer anunciar hoje?"
                className="w-full bg-[#050505] border border-gray-800 rounded-2xl p-6 text-white focus:outline-none focus:border-red-600 transition-colors resize-none h-32 text-sm"
              />
              <div className="flex justify-between items-center">
                <button className="flex items-center text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase">
                   <ImagePlus size={20} className="mr-2 text-red-600" /> Anexar Foto
                </button>
                <button className="bg-red-700 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center">
                  <Send size={16} className="mr-2" /> Publicar no Feed
                </button>
              </div>
            </div>

            {/* Visualização de Postagens Recentes */}
            <div className="space-y-6">
              <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-center">Postagens Anteriores</p>
              <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-48 h-48 bg-gray-900 flex-shrink-0">
                  <img src="/foto-professor.jpg" className="w-full h-full object-cover opacity-60" alt="Preview" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Postado em 15/04</span>
                      <button className="text-gray-600 hover:text-red-500 transition-colors"><XCircle size={18} /></button>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">"A arte de transformar o corpo e elevar a mente, onde a alta performance é uma consequência de uma experiência vivida na alma."</p>
                  </div>
                  <div className="mt-4 flex items-center space-x-6">
                    <div className="flex items-center text-gray-500 text-xs"><Heart size={14} className="mr-1 fill-red-600 text-red-600" /> 14</div>
                    <div className="flex items-center text-gray-500 text-xs"><MessageCircle size={14} className="mr-1" /> 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FINANCEIRO */}
        {abaAtiva === 'financeiro' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <h2 className="text-2xl font-black text-white uppercase tracking-widest border-l-4 border-red-600 pl-4">Gestão Financeira</h2>
            <div className="bg-[#111] p-12 rounded-3xl border border-gray-800 text-center">
              <DollarSign className="mx-auto text-green-500 mb-6" size={48} />
              <p className="text-gray-400">Em breve: Relatórios de pagamentos detalhados por aluno.</p>
            </div>
          </div>
        )}

      </main>

      {/* OVERLAY MOBILE */}
      {sidebarAberta && <div onClick={() => setSidebarAberta(false)} className="fixed inset-0 bg-black/60 z-30 md:hidden"></div>}
    </div>
  );
}

export default AdminDashboard;