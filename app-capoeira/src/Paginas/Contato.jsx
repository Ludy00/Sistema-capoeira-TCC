import React, { useState } from 'react';
import { MapPin, Phone, Send, Mail, Info } from 'lucide-react';

function Contato() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const numeroWhatsApp = "558698036175"; 

  // Criamos uma lista de locais para facilitar a manutenção
  const locaisDeTreino = [
    {
      id: 1,
      nome: 'Sede Muzenda PHB',
      endereco: 'Bairro Joaz Sousa, Parnaíba - PI',
      tipo: 'Sede Principal'
    },
    {
      id: 2,
      nome: 'Quadra São Sebastião',
      endereco: 'Bairro Nossa Senhora de Fátima, Parnaíba - PI',
      tipo: 'Núcleo de Treino'
    },
    {
      id: 3,
      nome: 'Novo Núcleo',
      endereco: 'Localização a definir. Entre em contato para saber mais!',
      tipo: 'Em breve'
    }
  ];

  const handleEnviarWhatsApp = (e) => {
    e.preventDefault(); 
    if (!nome || !mensagem) return;
    const texto = encodeURIComponent(`Olá Professor Toquinho! Meu nome é ${nome}. \n\n${mensagem}`);
    window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, '_blank');
    setNome('');
    setMensagem('');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans py-16 px-6 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center md:text-left mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
            Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Contato</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl text-lg">
            Ficou com alguma dúvida sobre as aulas, quer encomendar um instrumento ou convidar o grupo para um evento? Fale comigo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LADO ESQUERDO: LISTA DE LOCAIS E REDES */}
          <div className="space-y-8">
            
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-widest flex items-center">
                <MapPin className="text-red-600 mr-2" size={20} />
                Nossos Locais de Treino
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                {locaisDeTreino.map((local) => (
                  <div key={local.id} className={`p-6 rounded-2xl border transition-all ${local.id === 3 ? 'border-dashed border-gray-800 bg-transparent' : 'border-gray-800 bg-[#111] hover:border-red-900/50'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`font-bold ${local.id === 3 ? 'text-gray-500' : 'text-white text-lg'}`}>{local.nome}</h3>
                      <span className={`text-[10px] uppercase font-black px-2 py-1 rounded-md ${local.id === 3 ? 'bg-gray-900 text-gray-600' : 'bg-red-900/20 text-red-500'}`}>
                        {local.tipo}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed ${local.id === 3 ? 'text-gray-600 italic' : 'text-gray-400'}`}>
                      {local.endereco}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Redes Sociais e WhatsApp (Compactos para sobrar espaço) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <a href={`https://wa.me/${numeroWhatsApp}`} target="_blank" rel="noreferrer" className="flex items-center p-4 bg-[#111] border border-gray-800 rounded-2xl hover:border-green-900/50 transition-colors group">
                  <div className="w-10 h-10 bg-green-900/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="text-green-500" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">WhatsApp</p>
                    <p className="text-white text-sm">(86) 9803-6175</p>
                  </div>
               </a>

               <a href="https://www.instagram.com/toquinho_capoeira/" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-[#111] border border-gray-800 rounded-2xl hover:border-pink-900/50 transition-colors group">
                  <div className="w-10 h-10 bg-pink-900/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Instagram</p>
                    <p className="text-white text-sm">@toquinho_capoeira</p>
                  </div>
               </a>
            </div>

          </div>

          {/* LADO DIREITO: FORMULÁRIO (MANTIDO) */}
          <div className="bg-[#111] p-8 md:p-10 rounded-3xl border border-gray-800 relative h-fit">
            <h3 className="text-2xl font-bold text-white mb-6">Mande uma mensagem</h3>
            <form onSubmit={handleEnviarWhatsApp} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Seu Nome</label>
                <input 
                  type="text" required value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Como devemos te chamar?"
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Sua Mensagem</label>
                <textarea 
                  required value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Escreva aqui sua dúvida..."
                  rows="4"
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-red-900/20 group">
                <Send size={20} className="mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Enviar para o WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contato;