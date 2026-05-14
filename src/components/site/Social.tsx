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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gold mb-2">Redes sociais</h2>
            <p className="text-foreground/80">Saiba mais sobre meu trabalho acompanhando minhas redes.</p>
          </div>
          <div className="rounded-md border border-gold/30 bg-background/40 px-5 py-3 text-sm text-foreground/90 leading-relaxed">
            <div>Instagram: @usuario</div>
            <div>LinkedIn: usuario</div>
            <div>Facebook: usuario</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <div key={i} className="flex flex-col">
              <h3 className="text-2xl font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-foreground/80 mb-4">
                {p.text}{" "}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold hover:underline whitespace-nowrap"
                >
                  Ler mais
                </a>
              </p>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl overflow-hidden group"
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
