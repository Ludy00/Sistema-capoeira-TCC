import React from 'react';
import { ShoppingBag, MessageCircle } from 'lucide-react';

function Loja() {
  const produtos = [
    {
      id: 1,
      nome: 'Camisa Oficial - Branca',
      preco: 'R$ 55,00',
      descricao: 'Malha fria de alta qualidade.',
      imagem: '/logooficial.png' 
    },
    {
      id: 2,
      nome: 'Camisa Treino - Preta',
      preco: 'R$ 65,00',
      descricao: 'Ideal para o dia a dia e treinos intensos.',
      imagem: '/logooficial.png'
    },
    {
      id: 3,
      nome: 'Abadá Tradicional',
      preco: 'R$ 80,00',
      descricao: 'Tecido de alta qualidade.',
      imagem: '/logooficial.png'
    }
  ];

  const numeroWhatsApp = "558698036175"; 

  const handleCompra = (produtoNome) => {
    const mensagem = encodeURIComponent(`Olá Professor Toquinho! Gostaria de saber mais sobre o produto: ${produtoNome}`);
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Loja - CORRIGIDO PARA NÃO QUEBRAR O TEXTO */}
        <div className="mb-16 text-center lg:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-widest flex items-center justify-center lg:justify-start flex-nowrap">
            <ShoppingBag className="mr-3 sm:mr-4 text-red-600 shrink-0" size={40} />
            <span className="whitespace-nowrap">
              Loja do <span className="text-red-600">Grupo</span>
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-lg mt-4 max-w-2xl">
            Adquira os uniformes oficiais e os acessórios do grupo.
          </p>
        </div>

        {/* Grade de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-[#111] rounded-3xl border border-gray-800 overflow-hidden flex flex-col group hover:border-red-600/50 transition-all duration-500 shadow-2xl">
              
              {/* Espaço da Imagem */}
              <div className="aspect-square bg-[#0f0f0f] relative overflow-hidden flex items-center justify-center p-8">
                <img 
                  src={produto.imagem} 
                  alt={produto.nome} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white font-black px-4 py-1 rounded-full text-sm">
                  {produto.preco}
                </div>
              </div>

              {/* Informações do Produto */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{produto.nome}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-1">{produto.descricao}</p>
                
                <button 
                  onClick={() => handleCompra(produto.nome)}
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center transition-all active:scale-95 gap-2 shadow-lg shadow-green-900/20"
                >
                  <MessageCircle size={20} />
                  Pedir pelo WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Aviso de Envio */}
        <div className="mt-20 p-8 rounded-3xl bg-[#151515] border border-gray-800 text-center">
          <p className="text-gray-400 italic">
            * Retirada disponível diretamente nos locais de treino.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Loja;