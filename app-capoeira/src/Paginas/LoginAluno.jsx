import React, { useState } from 'react';
import { Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
// Usaremos o Link para simular a navegação (caso não tenha conta ou já logue)
import { Link, useNavigate } from 'react-router-dom';

function LoginAluno() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // --- SIMULAÇÃO DE LOGIN ---
    // No TCC real, aqui você mandaria o email e senha pro Firebase.
    // Como estamos na fase visual, se ele apertar "Entrar", vai direto pro painel.
    console.log("Tentando logar com:", email);
    
    // Simula que deu certo e joga o aluno pra página secreta dele
    navigate('/painel-aluno'); 
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Elementos decorativos de fundo (Sangramento sutil) */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gray-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 bg-[#111] rounded-3xl border border-gray-800 shadow-2xl overflow-hidden relative z-10">
        
        {/* === LADO ESQUERDO: Branding & Inspiração (Oculto em telas muito pequenas) === */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-r border-gray-800 relative">
           
           {/* Efeito de overlay escuro para melhorar a leitura */}
           <div className="absolute inset-0 bg-black/40 z-0"></div>

           <div className="relative z-10">
             <div className="w-24 h-24 mb-8">
               <img src="/logooficial.png" alt="Logo Toquinho" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]" />
             </div>
             <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-2">
               Portal do <span className="text-red-600">Aluno</span>
             </h2>
             <p className="text-gray-400 text-sm tracking-widest uppercase">Muzenza Parnaíba</p>
           </div>

           <div className="relative z-10 mt-12">
             <div className="w-12 h-1 bg-red-600 mb-6"></div>
             <p className="text-xl text-gray-300 font-light italic leading-relaxed">
               "A roda só acontece porque cada um traz a sua energia. Entre e acompanhe a sua evolução."
             </p>
             <p className="mt-4 text-sm font-bold text-gray-500 uppercase">— Professor Toquinho</p>
           </div>
        </div>

        {/* === LADO DIREITO: O Formulário de Login === */}
        <div className="p-8 sm:p-12 flex flex-col justify-center bg-[#111]">
          
          <div className="lg:hidden flex items-center justify-center mb-8">
             <img src="/logooficial.png" alt="Logo Toquinho" className="w-20 h-20 object-contain mr-4" />
             <div>
                <h2 className="text-2xl font-black text-white uppercase tracking-wider">Portal do <span className="text-red-600">Aluno</span></h2>
             </div>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Bem-vindo de volta!</h3>
            <p className="text-gray-400">Acesse sua conta para ver treinos e mensalidades.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Campo E-mail */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">E-mail de acesso</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-500" />
                </div>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu.email@exemplo.com"
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                 <label className="text-sm font-medium text-gray-400">Senha</label>
                 {/* Link de recuperação (só visual por enquanto) */}
                 <a href="#" className="text-xs text-red-500 hover:text-red-400 font-medium transition-colors">Esqueceu a senha?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500" />
                </div>
                <input 
                  type="password" 
                  required
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                />
              </div>
            </div>

            {/* Botão de Entrar */}
            <button 
              type="submit" 
              className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center transition-all active:scale-95 mt-8 shadow-lg shadow-red-900/20 group"
            >
              <LogIn size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
              Entrar no Sistema
            </button>

          </form>

          {/* Chamada para Cadastro */}
          <div className="mt-10 text-center border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              Ainda não faz parte do grupo?
            </p>
            {/* O onClick aqui vai mandar para a tela de contato futuramente */}
            <Link to="/contato" className="mt-2 inline-flex items-center text-red-500 hover:text-red-400 font-bold text-sm transition-colors group">
              Quero ser aluno 
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default LoginAluno;