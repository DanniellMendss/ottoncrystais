import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { useLanguage } from "@/hooks/useLanguage";
import heroImage from "@/assets/crystal-hero.jpg";
import crystalDetail from "@/assets/crystal-celestite.jpg";

export const Route = createFileRoute("/atelier")({
  component: Sobre,
});

function Sobre() {
  const { t } = useLanguage();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative flex items-center justify-center overflow-hidden min-h-[70vh] pt-32 md:pt-40">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Atelier Otton Crystais"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 text-center max-w-4xl px-6 pb-20 animate-afu">
            <p className="text-[10px] font-bold uppercase tracking-[.8em] text-white/50 mb-5">
              Atelier Otton
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-light italic tracking-tighter text-white drop-shadow-lg leading-tight">
              {t.sobre.title}
            </h1>
            <p className="mt-10 text-white/60 font-light italic max-w-lg mx-auto text-base md:text-xl">
              {t.sobre.description}
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 md:pb-48 pt-20 md:pt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-28 items-start">
            <div className="animate-afu space-y-10 text-foreground/70 font-light italic text-xl md:text-2xl leading-relaxed">
              {t.sobre.content.map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-foreground/5 animate-afi sticky top-32">
              <img
                src={crystalDetail}
                alt="Otton Crystais"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
