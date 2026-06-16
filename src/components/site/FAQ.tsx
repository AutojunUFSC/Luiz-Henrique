import { useState } from "react";
import unionBg from "@/assets/Background_faq_contato.png";
import logoFAQ from "@/assets/Logo_luiz_henrique_FAQ.png";


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
    <section
      id="faq"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "rgba(166, 141, 104, 1)"}}
>
  <div className="absolute inset-0 pattern-deco opacity-20" />
  
  {/* Imagem decorativa no canto direito */}
  <div
    className="absolute right-0 top-0 bottom-0 w-[180px] pointer-events-none"
    style={{
      backgroundImage: `url(${unionBg})`,
      backgroundSize: "cover",
      backgroundPosition: "left center",
      backgroundRepeat: "no-repeat",
      opacity: 1,
    }}
  />
  <div
    className="absolute -left-90 -top-30 bottom-0 w-[1058px] h-[1042px] pointer-events-none"
    style={{
      backgroundImage: `url(${logoFAQ})`,
      backgroundSize: "contain",
      backgroundPosition: "left center",
      backgroundRepeat: "no-repeat",
      opacity: 0.1,
    }}
  />
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl md:text-5xl mb-12"
        style={{
          color: "#FFF",
            fontFamily: "'Pathway Extreme', sans-serif",
            fontSize: "58px",
            fontStyle: "normal",
            fontWeight: 800,
            lineHeight: "100%",
        }}
        >Perguntas Frequentes</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="bg-card border border-gold/20 rounded-xl px-6 py-5 text-center transition-colors hover:border-gold/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span
                  className="block text-gold"
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
                  <p className="mt-4 text-muted-foreground text-base leading-relaxed">
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
