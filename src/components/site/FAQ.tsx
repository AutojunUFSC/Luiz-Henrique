import { useState } from "react";
import unionBg from "@/assets/Background_faq_contato.png";
import logoFAQ from "@/assets/Logo_luiz_henrique_FAQ.png";

const faqs = [
  { q: "Como sei qual é a regra de aposentadoria certa para mim?", a: "Realizamos uma análise gratuita do seu CNIS e tempo de contribuição para identificar a melhor estratégia." },
  { q: "Posso pagar INSS atrasado e me aposentar mais cedo?", a: "Sim. Muitos benefícios são concedidos com valores menores que o devido. Avaliamos sem compromisso." },
  { q: "O INSS negou meu auxílio-doença. E agora, o que eu faço?", a: "Depende do tipo de benefício, mas trabalhamos para reduzir prazos com estratégia jurídica adequada." },
  { q: "Qual o valor da minha aposentadoria?", a: "O valor depende de uma média das suas contribuições ao longo da vida e da regra na qual você se encaixa. Muitas vezes, o INSS comete erros de cálculo ou deixa de contar períodos de trabalho. Analisamos todo o seu histórico para garantir que nenhum centavo do seu direito fique para trás." },
  { q: "Nunca paguei o INSS na vida. Tenho direito a algum benefício?", a: "Sim. Atendemos presencial e 100% online, em todos os estados." },
  { q: "O escritório atende pessoas de outras cidades e estados?", a: "A primeira análise do seu caso é totalmente gratuita." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 overflow-hidden"
      style={{/*backgroundColor: "rgba(166, 141, 104, 1)",*/}}
>
  <div className="absolute inset-0 pattern-deco opacity-0" />
  
  {/* Imagem decorativa no canto direito */}
  {/* <div
    className="absolute right-0 top-0 h-[900px] w-[180px] pointer-events-none"
    style={{
      backgroundImage: `url(${unionBg})`,
      backgroundSize: "cover",
      backgroundPosition: "left center",
      backgroundRepeat: "no-repeat",
      opacity: 1,
    }}
  /> */}
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
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="self-start bg-card border ml-4 border-gold/20 rounded-xl px-2 py-2 text-center transition-colors hover:border-gold/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              style={{
                backgroundColor: "rgba(24, 24, 24, 1)",
              }}>
                <span
                  className="block transition-all"
                  style={{
                    fontFamily: "'Pathway Extreme', sans-serif",
                    fontWeight: 700,
                    fontSize: isOpen ? "30px": "22px",
                    lineHeight: "131%",
                  }}
                >
                  {f.q}
                </span>
                
                {isOpen && (
                  <p className="mt-4 ml-3 mr-3 text-muted-foreground text-justify text-base leading-relaxed"
                  style={{
                    color:"rgba(255, 255, 255, 1)",
                  }}>
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