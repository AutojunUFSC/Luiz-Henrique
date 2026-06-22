import aboutImg from "@/assets/about-lawyer.jpg";
import bgImg from "@/assets/logo-bg.png";

const reasons = ["Confiança", "Responsabilidade", "Acolhimento", "Objetividade", "Excelência"];

export function About() {
  return (
    <section id="quem-somos" className="relative py-24 bg-[#A68D68]">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none bg-no-repeat bg-right-top overflow-hidden"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "70% auto", 
          backgroundPosition: "150% -160%", 
        }}
      />
      <div className="container mx-auto px-6 relative">
        
        <h2 
          className="text-5xl md:text-6xl font-bold text-white mb-12"
          style={{ fontFamily: "'Pathway Extreme', sans-serif" }}
        >
          Quem somos
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div 
            className="rounded-2xl overflow-hidden shadow-[-20px_20px_50px_-5px_rgba(0,0,0,0.80)]"
          >
            <img
              src={aboutImg}
              alt="Dr. Luiz Ely"
              width={900}
              height={700}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white/90 grid content-start space-y-12">
            <div>
              <h3
                className="text-3xl font-bold text-[#ffffff] mb-3 text-[40px]"
                style={{ fontFamily: "'Pathway Extreme', sans-serif" }}
              >
                O escritório
              </h3>
              <p 
                className="text-[20px] leading-relaxed text-[#ffffff] font-normal" 
                style={{ fontFamily: "'Playfair Display', sans-serif" }}
              >
                Mais do que defender direitos, nosso foco é cuidar do seu futuro
                com segurança. Aliamos mais de 15 anos de experiência técnica a 
                um atendimento humano, transparente e próximo. Aqui, o seu caso não 
                é apenas um número: construímos soluções jurídicas personalizadas 
                com o profissionalismo e a atenção que você merece do início ao 
                fim do processo.
              </p>
            </div>
            <div>
              <h3
                className="text-3xl font-bold text-[#ffffff] mb-3 text-[40px]"
                style={{ fontFamily: "'Pathway Extreme', sans-serif" }}
              >
                DR Luiz Ely
              </h3>
              <p 
                className="text-[20px] font-normal leading-relaxed text-[#ffffff]" 
                style={{ fontFamily: "'Playfair Display', sans-serif" }}
              >
                É advogado com sólida trajetória pautada pela ética 
                e pela busca incessante pela excelência jurídica. 
                Com foco em oferecer soluções estratégicas e 
                personalizadas, sua atuação destaca-se pelo profundo 
                domínio técnico e pelo compromisso com os resultados 
                de seus clientes. Especialista em Direito Previdenciário, 
                excelência previdenciária  com foco em quem mais importa: você.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h2
            className="text-5xl md:text-6xl font-bold text-[#ffffff] mb-6"
            style={{ fontFamily: "'Pathway Extreme', sans-serif" }}
          >
            Por que nos escolher?
          </h2>
          <p 
            className="text-[20px] font-normal leading-relaxed mb-16 text-[#ffffff]"
            style={{ fontFamily: "'Playfair Display', sans-serif" }}
          >
            Você tem o direito de entender o seu próprio processo. Nosso atendimento é humano, 
            claro e ágil. Mantemos você informado sobre cada etapa da busca pelo seu benefício, 
            sem complicações. A segurança do seu futuro não pode ser entregue a qualquer um. 
            Atuamos com rigor técnico e atualização constante para garantir que nenhum detalhe 
            passe despercebido. Cada tempo de contribuição e cada história de vida exigem um olhar 
            único. Construímos estratégias jurídicas e cálculos 100% personalizados para que você 
            tenha o melhor resultado possível.
          </p>
          <div className="flex flex-wrap gap-6 justify-center md:justify-between items-center max-w-7xl mx-auto w-full">
            {reasons.map((r) => (
              <div key={r} className="text-center">
                <span
                  className="inline-block text-[30px] font-bold text-[#000000] cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1"
                  style={{ fontFamily: "'Pathway Extreme', sans-serif" }}
                >
                  {r}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}