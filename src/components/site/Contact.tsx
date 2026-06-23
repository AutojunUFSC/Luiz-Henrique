import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import contactImg from "@/assets/contact-lawyer.jpg";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }
    const body = `Nome: ${form.name}%0AEmail: ${form.email}%0ATelefone: ${form.phone}%0A%0A${form.message}`;
    window.location.href = `mailto:contato@luizely.adv.br?subject=Contato pelo site&body=${body}`;
    toast.success("Abrindo seu cliente de e-mail...");
  };
  return (
    <section
      id="contato"
      className="py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-2"
          style={{
            color: "#FFF",
            fontFamily: "'Pathway Extreme', sans-serif",
            fontSize: "58px",
            fontStyle: "normal",
            fontWeight: 800,
            lineHeight: "100%",
          }}
        >
          Contato
        </h2>
        <p
          className="text-white/80 mb-12"
          style={{
            color: "#FFF",
            fontFamily: "'Pathway Extreme', sans-serif",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "100%",
            marginTop: "15px",
          }}
        >
          Se interessou? Vamos agendar uma conversa
        </p>
        <div className="grid lg:grid-cols-2 gap-15 items-start">
          <div className="flex gap-6 items-start">
            <div className="rounded-2xl overflow-hidden w-[329px] h-[403px] shrink-0">
              <img
                src={contactImg}
                alt="Atendimento"
                width={329}
                height={403}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 mt-52">
              <div className="text-sm text-white space-y-1"
              style={{
                fontFamily: "'Pathway Extreme', sans-serif",
                letterSpacing:"1px",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
              }}>
                <p className="font-bold">DR. LUIZ ELY HENRIQUE</p>
                <p>Telefone: (00) 00000-0000</p>
                <p>WhatsApp: 00000-0000</p>
                <p>E-mail: email@gmail.com</p>
                <p>Instagram: @usuario</p>
              </div>
                <div
                  className="inline-block rounded-md w-fit"
                  style={{
                    background:
                      "linear-gradient(91.13deg, #494646 2.83%, #C2A781 38.46%, #A68D68 55.48%, #FDDEB4 66.32%, #CAB190 81.13%, #443C30 100.06%)",
                    padding: "3px",
                  }}
                >
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center px-5 py-2 rounded-[5px] font-semibold transition"
                    style={{
                      color: "#000000",
                      fontFamily: "'Pathway Extreme', sans-serif",
                      fontSize: "22px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      backgroundColor: "rgb(255, 255, 255)", // mesma cor de fundo da seção
                    }}
                    >                
                    Entre em contato
                  </a>
                </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-card border border-gold/20 rounded-2xl p-8 space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Envie um e-mail</h3>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Nome completo"
              className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold outline-none"
              
            />
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              placeholder="Seu melhor e-mail"
              className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold outline-none"
            />
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Telefone / WhatsApp"
              className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold outline-none"
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Conte brevemente o seu caso"
              rows={5}
              className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md gradient-gold text-primary-foreground font-semibold shadow-gold hover:opacity-90 transition"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}