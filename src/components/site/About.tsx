import aboutImg from "@/assets/about-lawyer.jpg";

const reasons = ["Confiança", "Responsabilidade", "Acolhimento", "Objetividade", "Excelência"];

export function About() {
  return (
    <section id="quem-somos" className="relative py-24 bg-[#1f1812]">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url('/src/assets/pattern-bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "480px auto",
          mixBlendMode: "overlay",
        }}
      />
      <div className="container mx-auto px-6 relative">
        <h2
          className="text-5xl md:text-6xl font-bold text-white mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Quem somos
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={aboutImg}
              alt="Dr. Luiz Ely"
              width={900}
              height={700}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-white/90">
            <h3
              className="text-3xl font-bold text-[#d4b97a] mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              O escritório
            </h3>
            <p className="text-sm leading-relaxed mb-8 text-white/85">
              Mais do que defender direitos, nosso foco é cuidar do seu futuro com segurança.
              Atuamos mais de 15 anos de experiência técnica e um atendimento humano,
              transparente e próximo. Aqui, o seu caso não é apenas um número:
              construímos soluções jurídicas personalizadas com o profissionalismo e a atenção
              que você merece do início ao fim do processo.
            </p>

            <h3
              className="text-3xl font-bold text-[#d4b97a] mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              DR Luiz Ely
            </h3>
            <p className="text-sm leading-relaxed text-white/85">
              É advogado com sólida trajetória pautada pela ética e pela busca incessante
              pela excelência jurídica. Com foco em oferecer soluções estratégicas e
              personalizadas, sua atuação destaca-se pelo profundo domínio técnico e pelo
              compromisso com os resultados de seus clientes. Especialista em Direito
              Previdenciário, excelência previdenciária, com foco em quem mais importa: você.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Por que nos escolher?
          </h2>
          <p className="text-sm text-white/85 max-w-5xl leading-relaxed mb-12">
            Você tem o direito de entender o seu próprio processo. Nosso atendimento é humano,
            claro e ágil. Mantemos você informado sobre cada etapa da busca pelo seu benefício,
            sem complicações. A segurança do seu futuro não pode ser entregue a qualquer um.
            Atuamos com rigor técnico e atualização constante para garantir que nenhum detalhe
            passe despercebido. Cada tempo de contribuição e cada história de vida exigem um
            olhar único. Construímos estratégias jurídicas e cálculos 100% personalizados para
            que você tenha o melhor resultado possível.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-8 border-t border-white/15">
            {reasons.map((r) => (
              <div key={r} className="text-center md:text-left">
                <span
                  className="inline-block text-lg md:text-xl font-bold text-white cursor-pointer transition-all duration-300 ease-out hover:text-[#d4b97a] hover:scale-110 hover:-translate-y-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
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
