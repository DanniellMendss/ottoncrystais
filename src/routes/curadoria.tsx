import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { useLanguage } from "@/hooks/useLanguage";
import heroCatalog from "@/assets/crystal-amethyst.jpg";

export const Route = createFileRoute("/curadoria")({
  component: Catalogo,
});

function Catalogo() {
  const { t } = useLanguage();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative flex items-center justify-center overflow-hidden min-h-[70vh] pt-32 md:pt-40">
          <div className="absolute inset-0">
            <img src={heroCatalog} alt="Cristais Raros" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 text-center max-w-4xl px-6 pb-20 animate-afu">
            <p className="text-[10px] font-bold uppercase tracking-[.8em] text-white/50 mb-5">
              Otton Crystais
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-light italic tracking-tighter text-white drop-shadow-lg">
              {t.catalogo.title}
            </h1>
            <p className="mt-10 text-white/60 font-light italic max-w-lg mx-auto text-base md:text-xl">
              {t.catalogo.description}
            </p>
          </div>
        </section>

        {/* Product grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 md:pb-48 pt-20 md:pt-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {products.map((product, i) => (
              <ProductCard key={product.id} {...product} delay={0.1 * i} />
            ))}
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
