import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/crystal-hero.jpg";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-charcoal-deep">
      {/* Background image with parallax feel */}
      <div className="absolute inset-0 animate-afi">
        <img
          src={heroImage}
          alt="Catedral de Ametista"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 pt-32 md:pt-40 animate-afu" style={{ animationDelay: "0.3s" }}>
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[1em] text-white/50 mb-10">
          {t.hero.tag}
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-light italic tracking-tighter text-white leading-[0.85] drop-shadow-lg">
          Arquitetura
          <br />
          Geológica
        </h1>
        <p className="mt-12 font-light italic text-white/50 leading-relaxed max-w-xl mx-auto text-base md:text-lg lg:text-xl">
          {t.hero.subtitle}
        </p>
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to="/curadoria"
            className="bg-white text-black font-bold uppercase tracking-[.6em] text-[10px] px-14 py-5 hover:bg-white/90 transition-all duration-500"
          >
            {t.hero.explore}
          </Link>
          <Link
            to="/contato"
            className="bg-transparent border border-white/25 text-white font-bold uppercase tracking-[.6em] text-[10px] px-14 py-5 hover:bg-white hover:text-black transition-all duration-500"
          >
            {t.hero.curation}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-afu" style={{ animationDelay: "1s" }}>
        <span className="text-[8px] font-bold uppercase tracking-[.5em] text-white/30">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}