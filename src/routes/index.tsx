import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { ProductGrid } from "@/components/ProductGrid";
import { EditorialSection } from "@/components/EditorialSection";

import { FooterSection } from "@/components/FooterSection";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Otton Crystais" },
      {
        name: "description",
        content:
          "Curadoria exclusiva de cristais raros e peças geológicas milenares. Fragmentos únicos da Terra para colecionadores exigentes.",
      },
      { property: "og:title", content: "Otton Crystais" },
      {
        property: "og:description",
        content: "Curadoria exclusiva de cristais raros e peças geológicas milenares.",
      },
    ],
  }),
});

function Index() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-foreground/[0.03] blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-foreground/[0.02] blur-[100px]" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <MarqueeSection />
        <ProductGrid />
        <EditorialSection />
        <MarqueeSection />
      </main>
      <FooterSection />
    </div>
  );
}
