import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { useLanguage } from "@/hooks/useLanguage";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import repImage from "@/assets/representative.png";
import heroCrystal from "@/assets/crystal-tourmaline.jpg";

export const Route = createFileRoute("/contato")({
  component: Representantes,
});

function Representantes() {
  const { t } = useLanguage();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative flex items-center justify-center overflow-hidden min-h-[70vh] pt-32 md:pt-40">
          <div className="absolute inset-0">
            <img
              src={heroCrystal}
              alt="Contato Otton Crystais"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 text-center max-w-4xl px-6 pb-20 animate-afu">
            <h1 className="font-display text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-light italic tracking-tighter text-white drop-shadow-lg mb-8">
              {t.representantes.title}
            </h1>
            <p className="text-white/60 font-light italic text-base md:text-xl max-w-lg mx-auto">
              {t.representantes.description}
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 md:pb-48 pt-20 md:pt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-start">

            {/* Portrait side */}
            <div className="relative aspect-[4/5] overflow-hidden border border-foreground/5 animate-afi">
              <img
                src={repImage}
                alt={t.representantes.rep_name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Data side */}
            <div className="animate-afu space-y-20">
              <div className="space-y-5">
                <p className="text-[10px] font-bold uppercase tracking-[.8em] text-muted-foreground">
                  {t.representantes.subtitle}
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground italic leading-tight">
                  {t.representantes.rep_name}
                </h2>
                <p className="text-foreground/50 font-light uppercase tracking-[.4em] text-xs">
                  {t.representantes.rep_role}
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-foreground/5 rounded-full transition-colors duration-300 group-hover:bg-foreground/10">
                    <Mail className="w-6 h-6 text-foreground" strokeWidth={1} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.4em] text-muted-foreground mb-2">E-mail</p>
                    <p className="text-xl md:text-2xl font-display italic text-foreground">{t.representantes.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-foreground/5 rounded-full transition-colors duration-300 group-hover:bg-foreground/10">
                    <Phone className="w-6 h-6 text-foreground" strokeWidth={1} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.4em] text-muted-foreground mb-2">WhatsApp</p>
                    <p className="text-xl md:text-2xl font-display italic text-foreground">{t.representantes.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-foreground/5 rounded-full transition-colors duration-300 group-hover:bg-foreground/10">
                    <MapPin className="w-6 h-6 text-foreground" strokeWidth={1} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.4em] text-muted-foreground mb-2">Location</p>
                    <p className="text-xl md:text-2xl font-display italic text-foreground">{t.representantes.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`https://wa.me/5599999999999?text=Gostaria de uma consultoria com ${t.representantes.rep_name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center w-full md:w-auto px-16 py-6 bg-foreground text-background text-[11px] font-bold uppercase tracking-[.6em] overflow-hidden transition-all duration-700 hover:bg-background hover:text-foreground border border-foreground"
                >
                  <span className="relative z-10 transition-colors duration-700">Falar com Especialista</span>
                  <div className="absolute inset-0 bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  <ArrowRight className="absolute right-8 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 z-10" strokeWidth={1} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
