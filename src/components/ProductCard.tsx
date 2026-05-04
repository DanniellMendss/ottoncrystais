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
      <div className="relative aspect-[4/5] overflow-hidden border border-foreground/5 mb-6 transition-all duration-700 group-hover:border-foreground/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_oklch(0.99_0_0_/_0.03)_0%,_transparent_70%)] z-10" />
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-background/20 backdrop-blur-[2px] flex items-center justify-center z-20">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
            <span className="text-[9px] font-bold uppercase tracking-[.6em] text-foreground border border-foreground/40 px-10 py-4 bg-background/60 backdrop-blur-xl">
              {t.products.view_piece}
            </span>
          </div>
        </div>
        
        {/* Subtle corner detail */}
        <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <div className="h-px w-4 bg-foreground/10 transition-all duration-700 group-hover:w-8 group-hover:bg-foreground/30"></div>
          <p className="text-[8px] font-bold uppercase tracking-[.4em] text-muted-foreground">
            {subtitle}
          </p>
        </div>
        <h3 className="font-display text-2xl italic font-light tracking-tight text-foreground transition-all duration-700 group-hover:pl-2">
          {name}
        </h3>
      </div>
    </Link>
  );
}
