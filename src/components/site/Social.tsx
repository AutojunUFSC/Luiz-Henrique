import s1 from "@/assets/social1.jpg";
import s2 from "@/assets/social2.jpg";
import s3 from "@/assets/social3.jpg";

export function Social() {
  const posts = [
    {
      img: s1,
      title: "Título",
      text: "Minha história na advocacia começou 15 anos atrás, quando eu...",
      href: "https://instagram.com",
    },
    {
      img: s2,
      title: "Título",
      text: "Por que eu escolhi o direito previdenciário. Eu sempre...",
      href: "https://instagram.com",
    },
    {
      img: s3,
      title: "Título",
      text: "Cada caso que eu trabalho tem um valor para mim. Significa...",
      href: "https://instagram.com",
    },
  ];

  return (
    <section id="redes-sociais" className="relative py-24 z-10 overflow-hidden">
      
      {/* Fundo escuro estendido para 68% da altura, englobando os textos perfeitamente */}
      <div className="absolute top-0 left-0 right-0 h-[68%] bg-[#181818] -z-10" />
      
      {/* Fundo bege nos 32% inferiores da seção */}
      <div className="absolute bottom-0 left-0 right-0 h-[32%] bg-[#A68D68] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <div>
            <h2 
              className="text-5xl md:text-6xl font-bold text-[#ffffff] mb-4 text-[64px]"
              style={{ fontFamily: "'Pathway Extreme', sans-serif" }}
            >
              Redes sociais
            </h2>
            <p 
              className="text-[32px] font-normal leading-relaxed text-[#ffffff]"
              style={{ fontFamily: "'Playfair Display', sans-serif" }}
            >
              Saiba mais sobre meu trabalho acompanhando minhas redes.
            </p>
          </div>
          
          <div 
            className="relative w-full md:w-[320px] text-center bg-transparent px-6 py-4 text-[18px] text-[#ffffff] leading-relaxed shadow-sm md:ml-auto"
            style={{ fontFamily: "'Playfair Display', sans-serif" }}
          >
            <svg className="absolute top-0 left-0 w-[3000px] h-full pointer-events-none" aria-hidden="true">
              <defs>
                <linearGradient id="border-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#494646" />
                  <stop offset="20%" stopColor="#C2A781" />
                  <stop offset="40%" stopColor="#A68D68" />
                  <stop offset="60%" stopColor="#FDDEB4" />
                  <stop offset="80%" stopColor="#CAB190" />
                  <stop offset="100%" stopColor="#443C30" />
                </linearGradient>
              </defs>
              <rect 
                x="1.5" 
                y="1.5" 
                width="3000" 
                height="calc(100% - 3px)" 
                rx="12" 
                ry="12" 
                fill="none" 
                stroke="url(#border-gradient)" 
                strokeWidth="3" 
              />
            </svg>

            <div className="relative z-10">Instagram: @usuario</div>
            <div className="relative z-10">LinkedIn: usuario</div>
            <div className="relative z-10">Facebook: usuario</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <div key={i} className="flex flex-col bg-transparent p-6 rounded-2xl shadow-[-15px_15px_40px_-10px_rgba(0,0,0,0.15)]">
              <h3 
                className="text-[26px] font-bold text-[#C3E8FF] mb-3"
                style={{ fontFamily: "'Pathway Extreme', sans-serif" }}
              >
                {p.title}
              </h3>
              <p 
                className="text-[18px] text-[#C3E8FF]/80 mb-6 leading-relaxed"
                style={{ fontFamily: "'Playfair Display', sans-serif" }}
              >
                {p.text}{" "}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold hover:underline whitespace-nowrap"
                >
                  Ler mais
                </a>
              </p>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl overflow-hidden group mt-auto"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition duration-500"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}