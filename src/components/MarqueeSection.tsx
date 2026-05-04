import { useLanguage } from "@/hooks/useLanguage";

export function MarqueeSection() {
  const { t } = useLanguage();
  const words = t.marquee;
  const repeated = [...words, "·", ...words, "·", ...words, "·", ...words, "·"];

  return (
    <section className="py-16 border-y border-foreground/5 overflow-hidden bg-charcoal-deep">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((word, i) => (
          <span
            key={i}
            className="font-display text-4xl md:text-6xl italic font-light tracking-tighter text-foreground/8 mx-8"
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
}
