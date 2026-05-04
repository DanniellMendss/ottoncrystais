import { ProductCard } from "./ProductCard";
import { products } from "@/lib/products";
import { useLanguage } from "@/hooks/useLanguage";

export function ProductGrid() {
  const { t } = useLanguage();

  return (
    <section className="relative px-6 md:px-12 py-32 md:py-48 bg-background overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
        <h2 className="font-display text-[20vw] lg:text-[25vw] leading-none tracking-tighter italic uppercase">
          Otton
        </h2>
      </div>

      <div className="max-w-[1700px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 gap-8">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[.8em] text-muted-foreground mb-6">
              {t.products.subtitle}
            </p>
            <h2 className="font-display text-5xl md:text-8xl font-light italic tracking-tighter text-foreground leading-[0.85]">
              {t.products.title}
            </h2>
          </div>
          <p className="text-muted-foreground text-sm font-light italic max-w-xs md:text-right">
            Peças selecionadas pela sua geometria sagrada e pureza milenar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 lg:gap-24">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`${i % 3 === 1 ? "lg:mt-24" : i % 3 === 2 ? "lg:mt-48" : ""}`}
            >
              <ProductCard {...product} delay={0.1 * i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
