import { Gavel } from "lucide-react";

const items = [
  {
    name: "Maria Silva",
    category: "Incapacidade",
    text: "O Dr. Luiz me ajudou com o meu auxílio por incapacidade. Ele avaliou meus laudos e exames médicos e me ajudou a recuperar meus direitos. Ótimo profissional.",
  },
  {
    name: "Carla Souza",
    category: "Aposentadoria",
    text: "Conduziu meu processo de aposentadoria com total transparência e agilidade. Hoje desfruto do meu benefício graças ao trabalho impecável do Dr. Luiz.",
  },
  {
    name: "Marcos Ribeiro",
    category: "Revisão",
    text: "Fiz a revisão da minha aposentadoria e o valor aumentou significativamente. Atendimento humano, claro e muito profissional do começo ao fim.",
  },
  {
    name: "Lúcia Pereira",
    category: "Pensão por Morte",
    text: "Após anos de tentativas, consegui a pensão por morte do meu esposo. O Dr. Luiz foi meu porto seguro em um momento tão difícil. Eternamente grata.",
  },
  {
    name: "Roberto Almeida",
    category: "BPC/LOAS",
    text: "Esclareceu todas as minhas dúvidas e conduziu o pedido do BPC com muita atenção. Recomendo de olhos fechados a quem precisa de um advogado de confiança.",
  },
  {
    name: "Fernanda Lima",
    category: "Acidente de Trabalho",
    text: "Sofri um acidente e estava perdido sem saber meus direitos. O Dr. Luiz garantiu meu auxílio-acidente com agilidade e dedicação impressionantes.",
  },
  {
    name: "Antônio Cardoso",
    category: "Aposentadoria Especial",
    text: "Trabalhei décadas exposto a agentes nocivos. O escritório reuniu toda a documentação e conquistou minha aposentadoria especial. Excelente trabalho.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-6 mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gold">Depoimentos</h2>
      </div>

      <div className="relative">
        <div
          className="flex gap-6 overflow-x-auto pb-8 px-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] snap-x snap-mandatory cursor-grab active:cursor-grabbing scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((t) => (
            <article
              key={t.name}
              className="snap-start shrink-0 w-[78vw] sm:w-[42vw] md:w-[28vw] lg:w-[calc((100%-1.5rem*3)/3.5)] min-w-[260px] max-w-[360px] aspect-[5/6] rounded-3xl bg-[#0b1a30] text-white p-7 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              <Gavel className="absolute top-5 right-5 w-10 h-10 text-white/70 -rotate-12" strokeWidth={1.5} />
              <div className="text-sm text-white/90 mb-1">{t.name}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight">{t.category}</h3>
              <p className="text-sm leading-relaxed text-white/85">{t.text}</p>
            </article>
          ))}
          <div className="shrink-0 w-6" aria-hidden />
        </div>
      </div>
    </section>
  );
}
