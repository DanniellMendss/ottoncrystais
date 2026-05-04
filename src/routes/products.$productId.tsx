import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { ProductCard } from "@/components/ProductCard";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/products/$productId")({
  component: ProductDetail,
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.productId);
    if (!product) {
      throw new Error("Peça não encontrada");
    }
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.product) return {};
    return {
      meta: [
        { title: `${loaderData.product.name} | Otton Crystais` },
        { name: "description", content: loaderData.product.description },
        { property: "og:title", content: `${loaderData.product.name} | Otton Crystais` },
        { property: "og:description", content: loaderData.product.description },
        { property: "og:image", content: `${window.location.origin}${loaderData.product.image}` },
        { property: "og:type", content: "website" },
      ],
    };
  },
});

function ProductDetail() {
  const { t } = useLanguage();
  const { product } = Route.useLoaderData();
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16 w-full">
          {/* Back Button */}
          <div className="mb-12 md:mb-16">
            <Link
              to="/curadoria"
              className="inline-flex items-center gap-4 text-[9px] uppercase tracking-[.6em] text-foreground hover:opacity-80 transition-all group"
            >
              <ChevronLeft
                className="w-4 h-4 transition-transform group-hover:-translate-x-2"
                strokeWidth={1}
              />
              <span>{t.products.back}</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 xl:gap-32 items-start">
            {/* Main Image */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="relative group/main flex items-center justify-center min-h-[400px] lg:min-h-[600px] bg-foreground/[0.02] border border-foreground/[0.05]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-[85%] max-h-[85%] object-contain relative z-10 transition-all duration-700 drop-shadow-[0_15px_45px_rgba(0,0,0,0.4)]"
                />

                <div className="absolute bottom-8 left-8 flex flex-col gap-1.5 opacity-10 pointer-events-none">
                  <span className="text-[7px] uppercase tracking-[.4em] font-bold">
                    Otton Atelier
                  </span>
                  <span className="text-[7px] uppercase tracking-[.4em] font-bold">
                    Natural Formation
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 flex flex-col justify-center lg:sticky lg:top-40">
              <div className="max-w-md space-y-12 md:space-y-16">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-10 bg-foreground/20"></div>
                    <span className="text-[9px] font-bold uppercase tracking-[.8em] text-muted-foreground">
                      {product.subtitle}
                    </span>
                  </div>
                  <h1 className="font-display text-4xl md:text-6xl text-foreground leading-[.9] tracking-tighter italic">
                    {product.name}
                  </h1>

                  <div className="border-b border-foreground/5 pb-6">
                    <span className="text-sm font-bold uppercase tracking-[.4em] text-muted-foreground">
                      {t.products.price_on_request}
                    </span>
                  </div>
                </div>

                <p className="text-foreground/80 font-light leading-relaxed text-xl md:text-2xl font-display italic">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-10 py-6 border-y border-foreground/5">
                  <div className="space-y-1.5">
                    <span className="text-[8px] uppercase tracking-[.4em] text-muted-foreground font-bold block">
                      {t.products.ref}
                    </span>
                    <span className="text-foreground/80 text-sm tracking-[.2em] font-light uppercase">
                      OT-100{product.id.length}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[8px] uppercase tracking-[.4em] text-muted-foreground font-bold block">
                      {t.products.status}
                    </span>
                    <span className="text-foreground/80 text-sm tracking-[.2em] font-light uppercase">
                      {t.products.exclusive}
                    </span>
                  </div>
                </div>

                <div className="pt-10 space-y-6">
                  {/* Mini Photo for confirmation */}
                  <div className="flex items-center gap-4 p-4 bg-foreground/[0.03] border border-foreground/[0.05] rounded-sm animate-afi">
                    <div className="w-16 h-16 overflow-hidden border border-foreground/10 bg-background flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[.2em] text-foreground">
                        {product.name}
                      </p>
                      <p className="text-[8px] uppercase tracking-[.1em] text-muted-foreground">
                        Pronto para orçamento
                      </p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/553888648233?text=${encodeURIComponent(
                      `*SOLICITAÇÃO DE ORÇAMENTO* 💎\n\n` +
                        `Olá! Tenho interesse nesta peça exclusiva:\n\n` +
                        `🏷️ *Peça:* ${product.name}\n` +
                        `🆔 *Referência:* #${product.id.toUpperCase()}\n\n` +
                        `🔗 *Link para detalhes e foto:* \n\n` +
                        `${window.location.href}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center w-full py-7 bg-foreground text-background text-[12px] font-bold uppercase tracking-[.8em] overflow-hidden transition-all duration-700 hover:bg-background hover:text-foreground border border-foreground"
                  >
                    <span className="relative z-10 transition-colors duration-700">
                      {t.products.consultancy}
                    </span>
                    <div className="absolute inset-0 bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                    <span className="absolute right-8 group-hover:translate-x-2 transition-transform duration-500 z-10">
                      <ArrowRight className="w-5 h-5" strokeWidth={1} />
                    </span>
                  </a>
                  <p className="text-center mt-4 text-[8px] uppercase tracking-[.3em] text-muted-foreground">
                    {t.products.whatsapp_text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Related Products */}
      <section className="py-24 md:py-40 border-t border-foreground/5 bg-foreground/[0.01]">
        <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-12 md:mb-20 tracking-tighter italic">
            {t.products.related}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((rel, i) => (
              <ProductCard key={rel.id} {...rel} delay={0.1 * i} />
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
