import heroBg from "@/assets/hero-bg.png";
import logoLe from "@/assets/logo-le-full.png";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex items-center justify-center" style={{ transform: "translateY(20px)" }}>
        <img
          src={logoLe}
          alt="Luiz Ely Advocacia"
          className="w-[260px] md:w-[360px] lg:w-[420px] h-auto transition-transform duration-500 ease-out hover:scale-110 cursor-pointer"
        />
      </div>
    </section>
  );
}
