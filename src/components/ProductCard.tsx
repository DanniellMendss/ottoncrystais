import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/hooks/useLanguage";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  subtitle: string;
  price: number;
  delay?: number;
}

export function ProductCard({ id, image, name, subtitle, delay = 0 }: ProductCardProps) {
  const { t } = useLanguage();

  return (
    <Link
      to="/products/$productId"
      params={{ productId: id }}
      className="group cursor-pointer animate-afu block"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden border border-foreground/5 mb-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_oklch(0.99_0_0_/_0.03)_0%,_transparent_70%)]" />
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center">
          <span className="text-[10px] font-bold uppercase tracking-[.4em] text-foreground border border-foreground/20 px-8 py-3 bg-background/40 backdrop-blur-md">
            {t.products.view_piece}
          </span>
        </div>
      </div>
      <p className="text-[9px] font-bold uppercase tracking-[.4em] text-muted-foreground mb-1">
        {subtitle}
      </p>
      <h3 className="font-display text-xl italic font-light tracking-tight text-foreground">
        {name}
      </h3>
    </Link>
  );
}
