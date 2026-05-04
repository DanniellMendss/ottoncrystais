import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/hooks/useLanguage";

export function FooterSection() {
  const { t } = useLanguage();

  return (
    <footer className="px-6 md:px-16 py-24 border-t border-foreground/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-12">
        <div className="w-full md:w-auto">
          <p className="font-display text-3xl md:text-4xl italic font-light tracking-tight text-foreground mb-4">
            Otton Crystais
          </p>
          <p className="font-light italic text-foreground/35 text-sm max-w-xs leading-relaxed">
            {t.hero.subtitle.split(".")[0]}.
          </p>
        </div>
        <div className="flex flex-wrap gap-12 sm:gap-20">
          <div className="flex flex-col gap-4">
            <p className="text-[9px] font-bold uppercase tracking-[.4em] text-muted-foreground mb-3">
              Navegação
            </p>
            <Link
              to="/curadoria"
              className="text-sm font-light italic text-foreground/50 hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              {t.nav.catalogo}
            </Link>
            <Link
              to="/atelier"
              className="text-sm font-light italic text-foreground/50 hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              {t.nav.sobre}
            </Link>
            <Link
              to="/contato"
              className="text-sm font-light italic text-foreground/50 hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              {t.nav.representantes}
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[9px] font-bold uppercase tracking-[.4em] text-muted-foreground mb-3">
              Social
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light italic text-foreground/50 hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light italic text-foreground/50 hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-foreground/5 flex justify-between items-center">
        <p className="text-[9px] uppercase tracking-[.3em] text-foreground/25">{t.footer.rights}</p>
        <p className="text-[9px] uppercase tracking-[.3em] text-foreground/25">
          Feito por Antigravity AI
        </p>
      </div>
    </footer>
  );
}
