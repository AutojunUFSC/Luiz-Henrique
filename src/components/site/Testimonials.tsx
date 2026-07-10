import { useState, useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="depoimentos" className="pt-24 pb-0 relative z-20 overflow-visible">
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(166, 141, 104, 0.55);
          border-radius: 9999px;
          cursor: pointer;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(166, 141, 104, 0.85);
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        .custom-scrollbar {
          scrollbar-width: auto;
          scrollbar-color: rgba(166, 141, 104, 0.55) rgba(255, 255, 255, 0.05);
        }

        .custom-scrollbar::before,
        .custom-scrollbar::after {
          content: "";
          display: block;
          flex-shrink: 0;
          width: 1.5rem;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          margin-left: 1.5rem;
          margin-right: 1.5rem;
        }

        @media (min-width: 640px) {
          .custom-scrollbar::before, .custom-scrollbar::after { width: calc((100vw - 640px) / 2 + 1.5rem); }
          .custom-scrollbar::-webkit-scrollbar-track { margin-left: calc((100vw - 640px) / 2 + 1.5rem); margin-right: calc((100vw - 640px) / 2 + 1.5rem); }
        }
        @media (min-width: 768px) {
          .custom-scrollbar::before, .custom-scrollbar::after { width: calc((100vw - 768px) / 2 + 1.5rem); }
          .custom-scrollbar::-webkit-scrollbar-track { margin-left: calc((100vw - 768px) / 2 + 1.5rem); margin-right: calc((100vw - 768px) / 2 + 1.5rem); }
        }
        @media (min-width: 1024px) {
          .custom-scrollbar::before, .custom-scrollbar::after { width: calc((100vw - 1024px) / 2 + 1.5rem); }
          .custom-scrollbar::-webkit-scrollbar-track { margin-left: calc((100vw - 1024px) / 2 + 1.5rem); margin-right: calc((100vw - 1024px) / 2 + 1.5rem); }
        }
        @media (min-width: 1280px) {
          .custom-scrollbar::before, .custom-scrollbar::after { width: calc((100vw - 1280px) / 2 + 1.5rem); }
          .custom-scrollbar::-webkit-scrollbar-track { margin-left: calc((100vw - 1280px) / 2 + 1.5rem); margin-right: calc((100vw - 1280px) / 2 + 1.5rem); }
        }
        @media (min-width: 1536px) {
          .custom-scrollbar::before, .custom-scrollbar::after { width: calc((100vw - 1536px) / 2 + 1.5rem); }
          .custom-scrollbar::-webkit-scrollbar-track { margin-left: calc((100vw - 1536px) / 2 + 1.5rem); margin-right: calc((100vw - 1536px) / 2 + 1.5rem); }
        }
      `}</style>

      <div className="absolute inset-x-0 top-0 bottom-[180px] bg-[#A68D68] -z-10" />
      <div className="absolute inset-x-0 bottom-0 h-[180px] bg-[#181818] -z-10" />

      <div className="container mx-auto px-6 mb-12 relative z-10">
        <h2 
          className="text-5xl md:text-6xl font-bold text-[#001D33]"
          style={{ fontFamily: "'Pathway Extreme', sans-serif" }}
        >
          Depoimentos
        </h2>
      </div>

      <div className="relative z-10">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 overflow-x-auto pt-16 pb-20 custom-scrollbar transition-all
            ${isDragging ? "snap-none select-none cursor-grabbing" : "snap-x snap-mandatory cursor-grab"}`}
        >
          {items.map((t) => (
            <article
              key={t.name}
              className="snap-start shrink-0 w-[78vw] sm:w-[42vw] md:w-[28vw] lg:w-[calc((100%-1.5rem*3)/3.5)] min-w-[260px] max-w-[360px] aspect-[5/6] relative overflow-visible"
            >
              <Gavel 
                className="absolute -top-10 -right-4 w-20 h-20 text-[#e2e8f0] drop-shadow-[-12px_12px_20px_rgba(0,0,0,0.6)] -rotate-12 z-30 transition-transform duration-300 hover:scale-110 pointer-events-none" 
                strokeWidth={1.2} 
              />
              
              <div className="rounded-3xl bg-[#0b1a30] p-7 h-full w-full shadow-[-15px_15px_40px_-10px_rgba(0,0,0,0.4)] relative z-20 flex flex-col justify-between">
                <div>
                  <div 
                    className="text-sm text-white/80 mb-2"
                    style={{ fontFamily: "'Pathway Extreme', sans-serif" }}
                  >
                    {t.name}
                  </div>
                  
                  <h3 
                    className="text-[26px] font-bold mb-5 leading-tight text-white"
                    style={{ fontFamily: "'Pathway Extreme', sans-serif" }}
                  >
                    {t.category}
                  </h3>
                  
                  <p 
                    className="text-[18px] leading-relaxed text-white/90"
                    style={{ fontFamily: "'Playfair Display', sans-serif" }}
                  >
                    {t.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}