import { useState } from "react";
import unionBg from "@/assets/Background_faq_contato.png";

const faqs = [
  { q: "Como sei se tenho direito à aposentadoria?", a: "Realizamos uma análise gratuita do seu CNIS e tempo de contribuição para identificar a melhor estratégia." },
  { q: "Posso solicitar revisão do meu benefício?", a: "Sim. Muitos benefícios são concedidos com valores menores que o devido. Avaliamos sem compromisso." },
  { q: "Quanto tempo leva o processo no INSS?", a: "Depende do tipo de benefício, mas trabalhamos para reduzir prazos com estratégia jurídica adequada." },
  { q: "Qual o valor da minha aposentadoria?", a: "Calculamos o valor correto considerando todas as suas contribuições e regras de transição." },
  { q: "Atendem em todo o Brasil?", a: "Sim. Atendemos presencial e 100% online, em todos os estados." },
  { q: "Cobram pela consulta inicial?", a: "A primeira análise do seu caso é totalmente gratuita." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative -mt-24 pt-36 pb-24 bg-[#A68D68] z-20 overflow-hidden">
      
      <div
        className="absolute top-0 left-0 w-full h-[600px] opacity-40 pointer-events-none bg-no-repeat bg-top bg-cover"
        style={{
          backgroundImage: `url(${unionBg})`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <h2 
          className="text-5xl md:text-6xl font-bold text-[#ffffff] mb-12"
          style={{ fontFamily: "'Pathway Extreme', sans-serif" }}
        >
          Perguntas Frequentes
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="bg-[#ffffff]/10 backdrop-blur-sm border border-[#ffffff]/20 rounded-2xl px-8 py-6 text-left transition-all hover:bg-[#ffffff]/20 focus:outline-none"
              >
                <span
                  className="block text-[#ffffff]"
                  style={{
                    fontFamily: "'Pathway Extreme', sans-serif",
                    fontWeight: 700,
                    fontSize: "26px",
                    lineHeight: "131%",
                  }}
                >
                  {f.q}
                </span>
                
                {isOpen && (
                  <p 
                    className="mt-5 text-[#ffffff] text-[20px] leading-relaxed"
                    style={{ fontFamily: "'Playfair Display', sans-serif" }}
                  >
                    {f.a}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}