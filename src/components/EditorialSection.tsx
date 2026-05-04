import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/crystal-hero.jpg";

export function EditorialSection() {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-12 py-32 md:py-40 bg-charcoal-deep">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-28 items-center">
        <div className="animate-afu">
          <p className="text-[10px] font-bold uppercase tracking-[.8em] text-muted-foreground mb-8">
            {t.editorial.tag}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light italic tracking-tighter text-foreground leading-[1] mb-10 whitespace-pre-line">
            {t.editorial.title}
          </h2>
          <p className="font-light italic text-foreground/50 leading-relaxed text-base md:text-lg max-w-md mb-14">
            {t.editorial.description}
          </p>
          <Link
            to="/atelier"
            className="inline-block bg-transparent border border-foreground/20 text-foreground font-bold uppercase tracking-[.5em] text-[10px] px-12 py-5 hover:bg-foreground hover:text-background transition-all duration-500"
          >
            {t.editorial.cta}
          </Link>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden animate-afu" style={{ animationDelay: "0.2s" }}>
          <img
            src={heroImage}
            alt="Atelier Otton Crystais"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}