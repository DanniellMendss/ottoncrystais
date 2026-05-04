import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/crystal-hero.jpg";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen md:min-h-[110vh] flex items-center justify-center overflow-hidden bg-charcoal-deep">
      {/* Background image with subtle scale animation */}
      <div className="absolute inset-0 animate-afi overflow-hidden">
        <img
          src={heroImage}
          alt="Catedral de Ametista"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-50 scale-110 animate-zoom-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center max-w-6xl px-6 pt-32 md:pt-40 animate-afu"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="inline-block mb-12 overflow-hidden">
          <p className="text-[9px] md:text-xs font-bold uppercase tracking-[1.2em] text-white/60 animate-reveal-up">
            {t.hero.tag}
          </p>
        </div>
        
        <h1 className="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-light italic tracking-tighter text-white leading-[0.8] drop-shadow-2xl">
          <span className="block mb-2 md:mb-4">Arquitetura</span>
          <span className="block ml-[0.1em]">Geológica</span>
        </h1>
        
        <p className="mt-14 font-light italic text-white/60 leading-relaxed max-w-xl mx-auto text-base md:text-xl lg:text-2xl animate-afi" style={{ animationDelay: "0.8s" }}>
          {t.hero.subtitle}
        </p>
        
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 animate-afu" style={{ animationDelay: "1s" }}>
          <Link
            to="/curadoria"
            className="group relative bg-white text-black font-bold uppercase tracking-[.8em] text-[10px] px-16 py-6 overflow-hidden transition-all duration-700"
          >
            <span className="relative z-10 transition-colors duration-700 group-hover:text-white">{t.hero.explore}</span>
            <div className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          </Link>
          <Link
            to="/contato"
            className="group relative bg-transparent border border-white/20 text-white font-bold uppercase tracking-[.8em] text-[10px] px-16 py-6 overflow-hidden transition-all duration-700 hover:border-white/40"
          >
            <span className="relative z-10 transition-colors duration-700 group-hover:text-black">{t.hero.curation}</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce-slow"
      >
        <span className="text-[7px] font-bold uppercase tracking-[.6em] text-white/30">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
      </div>
    </section>
  );
}
