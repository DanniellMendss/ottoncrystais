import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Mail, Phone } from "lucide-react";
import repImage from "@/assets/representative.png";

export function HomeRepresentantes() {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-12 py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-[16/9] lg:aspect-[4/5] overflow-hidden border border-foreground/5 animate-afi">
            <img
              src={repImage}
              alt={t.representantes.rep_name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          <div className="animate-afu space-y-12">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[.8em] text-muted-foreground">
                {t.representantes.title}
              </p>
              <h2 className="font-display text-4xl md:text-6xl text-foreground italic leading-tight">
                {t.representantes.rep_name}
              </h2>
              <p className="text-foreground/60 font-light italic text-xl max-w-md">
                {t.representantes.description}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-foreground/40 italic">
                <Mail className="w-5 h-5" strokeWidth={1} />
                <span className="text-lg font-display">{t.representantes.email}</span>
              </div>
              <div className="flex items-center gap-4 text-foreground/40 italic">
                <Phone className="w-5 h-5" strokeWidth={1} />
                <span className="text-lg font-display">{t.representantes.phone}</span>
              </div>
            </div>

            <Link 
              to="/contato"
              className="group relative inline-flex items-center justify-center px-12 py-5 bg-foreground text-background text-[10px] font-bold uppercase tracking-[.4em] overflow-hidden transition-all duration-700 hover:bg-background hover:text-foreground border border-foreground"
            >
              <span className="relative z-10">{t.nav.representantes}</span>
              <div className="absolute inset-0 bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
              <ArrowRight className="absolute right-6 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 z-10" strokeWidth={1} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
