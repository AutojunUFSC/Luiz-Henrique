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
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gold mb-2">Contato</h2>
        <p className="text-muted-foreground mb-12">Estamos prontos para defender os seus direitos.</p>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="rounded-2xl overflow-hidden border border-gold/20 mb-6">
              <img src={contactImg} alt="Atendimento" width={800} height={900} loading="lazy" className="w-full h-auto" />
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground"><Phone className="w-4 h-4 text-gold" /> (00) 00000-0000</div>
              <div className="flex items-center gap-3 text-muted-foreground"><Mail className="w-4 h-4 text-gold" /> contato@luizely.adv.br</div>
              <div className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-4 h-4 text-gold" /> Atendimento em todo o Brasil</div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="bg-card border border-gold/20 rounded-2xl p-8 space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Envie um e-mail</h3>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Nome completo" className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold outline-none" />
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email" placeholder="Seu melhor e-mail" className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold outline-none" />
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Telefone / WhatsApp" className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold outline-none" />
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Conte brevemente o seu caso" rows={5} className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold outline-none" />
            <button type="submit" className="w-full py-3 rounded-md gradient-gold text-primary-foreground font-semibold shadow-gold hover:opacity-90 transition">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
