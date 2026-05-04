import { useLanguage } from "@/hooks/useLanguage";
import fabImage from "@/assets/fabrication.png";

export function FabricacaoSection() {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-12 py-24 bg-charcoal-deep">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-afu">
            <p className="text-[10px] font-bold uppercase tracking-[.8em] text-muted-foreground mb-6">
              {t.fabricacao.tag}
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-light italic tracking-tighter text-foreground leading-[1.1] mb-8">
              {t.fabricacao.title}
            </h2>
            <p className="font-light italic text-foreground/60 leading-relaxed text-lg md:text-xl max-w-md mb-10">
              {t.fabricacao.description}
            </p>
            <button className="bg-transparent border border-foreground/20 text-foreground font-bold uppercase tracking-[.6em] text-[10px] px-12 py-5 hover:bg-foreground hover:text-background transition-all duration-300">
              {t.fabricacao.cta}
            </button>
          </div>

          <div className="order-1 lg:order-2 relative aspect-[16/9] lg:aspect-[4/5] overflow-hidden border border-foreground/5 animate-afi">
            <img
              src={fabImage}
              alt="Fabricação de Peças de Cristal"
              className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
