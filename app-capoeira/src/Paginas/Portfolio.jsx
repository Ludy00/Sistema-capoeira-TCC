import React from 'react';

function Portfolio() {
  // Isso é um "Array de Objetos". Facilita muito para você adicionar mais fotos depois sem ter que copiar e colar dezenas de linhas de código HTML.
  const trabalhosArtesanais = [
    { id: 1, titulo: 'Berimbaus', desc: 'Fabricação completa, da verga à cabaça.', img: '/foto-professor.jpg' },
    { id: 2, titulo: 'Atabaques', desc: 'Madeira nobre e couro tratado artesanalmente.', img: '/foto-professor.jpg' },
    { id: 3, titulo: '-------', desc: '--------------------------------', img: '/foto-professor.jpg' },
  ];

  const eventosCapoeira = [
    { id: 4, titulo: 'Batizado 2024', desc: 'Formatura de novos alunos da Muzenza.', img: '/foto-professor.jpg' },
    { id: 5, titulo: 'Roda na Praça', desc: 'Levando a cultura popular para as ruas de Parnaíba.', img: '/foto-professor.jpg' },
    { id: 6, titulo: 'Mundiais', desc: 'Participação em competições mundiais.', img: '/foto-professor.jpg' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Cabeçalho do Portfólio */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
            Acervo <span className="text-red-600">Cultural</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Um registro visual da arte que se joga na roda e a arte que se constrói com as mãos.
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Seção 1: Artesanato */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-red-600 pl-4">
            Fabricação Artesanal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trabalhosArtesanais.map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden bg-[#111] border border-gray-800 hover:border-red-900/50 transition-colors">
                <div className="aspect-[4/3] overflow-hidden">
                  {/* Troque a imagem abaixo pelas fotos reais dos instrumentos depois */}
                  <img src={item.img} alt={item.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.titulo}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção 2: Capoeira */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-red-600 pl-4">
            Vivência na Capoeira
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventosCapoeira.map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden bg-[#111] border border-gray-800 hover:border-red-900/50 transition-colors">
                <div className="aspect-[4/3] overflow-hidden">
                  {/* Troque a imagem abaixo pelas fotos reais das rodas depois */}
                  <img src={item.img} alt={item.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                  <h3 className="text-xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.titulo}</h3>
                  <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default Portfolio;