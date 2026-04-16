import React from 'react';

function PaginaInicial() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans">
      
      {/* === SEÇÃO 1: HERO (Logo e Frase Centralizados - MANTIDO INTACTO) === */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 py-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col items-center text-center space-y-12 max-w-4xl relative z-10">
          <div className="w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
            <img 
              src="/logooficial.png" 
              alt="Logo Toquinho Capoeira" 
              className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(220,38,38,0.2)] hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="w-64 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          
          <div className="space-y-6">
            <p className="text-xl md:text-3xl text-gray-300 leading-relaxed font-light italic tracking-wide px-4">
              "A arte de transformar o corpo e elevar a mente, onde a alta performance é uma consequência de uma experiência vivida na alma."
            </p>
            <h2 className="text-2xl font-black text-red-600 tracking-[0.3em] uppercase">
              Toquinho <span className="text-red-600">Capoeira</span>
            </h2>
          </div>
        </div>
      </section>


      {/* === SEÇÃO 2: A HISTÓRIA DO PROFESSOR === */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-900/40">
        
        {/* O items-start é o segredo para a foto fixa (sticky) funcionar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LADO ESQUERDO: O TEXTO DA HISTÓRIA (Ocupa 7 colunas no PC) */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
            
            {/* Título Principal */}
            <div>
              <p className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2">A Trajetória</p>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wide leading-tight">
                O Berimbau já me <span className="text-transparent bg-clip-text bg-white from-white to-gray-500">Chamava</span>
              </h2>
            </div>

            {/* Corpo do Texto Dividido em Capítulos */}
            <div className="space-y-12 text-lg text-gray-400 leading-relaxed text-justify font-light">
              
              {/* Capítulo 1 */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-[2px] bg-red-600 mr-4"></span>
                  O Olhar na Janela do Ônibus
                </h3>
                <p>
                  Minha história com a Capoeira começou muito antes do meu primeiro uniforme. Começou na janela de um transporte público, atravessando as avenidas de Parnaíba. Sempre que o ônibus passava por aquela roda rotineira no caminho para a casa dos meus avós, algo dentro de mim despertava. Eu não apenas olhava; eu sentia. Tanto que, ainda criança, convencia meus pais a descerem ali mesmo, no meio do caminho, só para que eu pudesse absorver o ritmo, o movimento e o axé que vinham da roda.
                </p>
              </div>

              {/* Capítulo 2 */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-[2px] bg-red-600 mr-4"></span>
                  O Despertar em 1999
                </h3>
                <p className="mb-4">
                  A oportunidade de pisar no solo sagrado da Capoeira veio aos 4 anos de idade, no bairro Joaz Sousa. Meus primos mais velhos, sabendo daquela minha paixão de "beira de estrada", me levaram para o projeto que estava iniciando. Ali, na Associação Beira Mar, sob os ensinamentos do Professor Taxinha, dei meus primeiros passos.
                </p>
                <p>
                  A paixão foi tão contagiante que meus pais, ao verem minha dedicação, também entraram na roda para me acompanhar. A Capoeira deixou de ser um hobby meu para se tornar o elo da nossa família.
                </p>
              </div>

              {/* Capítulo 3 */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-[2px] bg-red-600 mr-4"></span>
                  A Evolução e a Identidade
                </h3>
                <p>
                  A vida é feita de ciclos e escolhas. Por volta dos meus 5 anos de prática, meu olhar se encantou por um estilo que exalava técnica e energia: o jogo do então Contramestre Montanha (hoje Mestre). Aquela admiração me levou ao Grupo Muzenza, onde encontrei o solo fértil para florescer. Sob a tutela do Mestre Montanha, formei não apenas meu corpo, mas meu caráter.
                </p>
              </div>

              {/* Capítulo 4 */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-[2px] bg-red-600 mr-4"></span>
                  Resiliência e Liderança
                </h3>
                <p className="mb-4">
                  Nesses anos de estrada, enfrentei altos e baixos, como todo grande jogo. Mas nunca houve o silêncio do meu berimbau. A constância me trouxe títulos, reconhecimento nacional e internacional dentro da Escola Muzenza, e o maior prêmio de todos: a responsabilidade.
                </p>
                <p>
                  Hoje, como <strong>Toquinho Capoeira</strong>, tenho a honra de ser o responsável pela <strong>Escola Muzenza em Parnaíba</strong> sob a coordenação do Mestre Burguês (minha maior referência no mundo da capoeira). Minha missão não é apenas ensinar movimentos, mas manter viva aquela mesma chama que me fazia descer do ônibus aos quatro anos de idade.
                </p>
              </div>

            </div>

            {/* Citação de Impacto Final */}
            <div className="pt-8 pb-4">
              <div className="relative p-8 rounded-3xl border border-gray-800 bg-[#111111]/50 shadow-inner">
                {/* Aspas decorativas gigantes no fundo */}
                <span className="absolute top-2 left-6 text-8xl font-serif text-gray-800/30">"</span>
                <p className="relative text-xl md:text-2xl text-white font-medium italic text-center leading-relaxed">
                  A capoeira me ensinou que, no jogo e na vida, a queda é apenas o intervalo para um novo movimento.
                </p>
              </div>
            </div>

          </div>


          {/* LADO DIREITO: A FOTO FIXA (Ocupa 5 colunas no PC) */}
          {/* O sticky top-32 faz a foto ficar parada enquanto o texto rola */}
          <div className="lg:col-span-5 sticky top-32 order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-gray-800/50 group">
              <img 
                src="/foto-professor.jpg" 
                alt="Professor tocando Berimbau" 
                className="w-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out aspect-[4/5] lg:aspect-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
              
              {/* Uma legenda elegante em cima da foto */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white font-bold text-xl uppercase tracking-widest">Professor Toquinho</p>
                <p className="text-red-500 font-medium text-sm mt-1 uppercase tracking-wider">Muzenza Parnaíba</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default PaginaInicial;