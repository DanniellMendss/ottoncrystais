import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useLanguage } from "@/hooks/useLanguage";
import { Language } from "@/lib/translations";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const navigate = useNavigate();

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
    setMobileMenuOpen(false);
    navigate({ to: "/" });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const isTransparent = !scrolled && !mobileMenuOpen;

  const languages: { code: Language; flag: React.ReactNode }[] = [
    {
      code: "pt",
      flag: (
        <svg viewBox="0 0 512 512" className="w-full h-full">
          <circle cx="256" cy="256" r="256" fill="#009b3a" />
          <path fill="#fedf00" d="M256 50l206 206-206 206L50 256z" />
          <circle cx="256" cy="256" r="95" fill="#002776" />
          <path fill="#fff" d="M161 256c0 5 45 35 95 35s95-30 95-35-45-15-95-15-95 10-95 15z" />
        </svg>
      ),
    },
    {
      code: "en",
      flag: (
        <svg viewBox="0 0 512 512" className="w-full h-full">
          <circle cx="256" cy="256" r="256" fill="#012169" />
          <path
            fill="#fff"
            d="M54 96l404 320M54 416l404-320M0 256h512M256 0v512"
            stroke="#fff"
            strokeWidth="60"
          />
          <path d="M54 96l404 320M54 416l404-320" stroke="#c8102e" strokeWidth="40" />
          <path d="M0 256h512M256 0v512" stroke="#c8102e" strokeWidth="60" />
        </svg>
      ),
    },
    {
      code: "es",
      flag: (
        <svg viewBox="0 0 512 512" className="w-full h-full">
          <circle cx="256" cy="256" r="256" fill="#aa151b" />
          <path fill="#f1bf00" d="M0 128h512v256H0z" />
        </svg>
      ),
    },
    {
      code: "fr",
      flag: (
        <svg viewBox="0 0 512 512" className="w-full h-full">
          <circle cx="256" cy="256" r="256" fill="#fff" />
          <path fill="#002395" d="M0 0h170.7v512H0z" />
          <path fill="#ed2939" d="M341.3 0H512v512H341.3z" />
        </svg>
      ),
    },
  ];

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/curadoria", label: t.nav.catalogo },
    { to: "/atelier", label: t.nav.sobre },
    { to: "/contato", label: t.nav.representantes },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 lg:px-20 transition-all duration-700 ${
          isTransparent
            ? "py-6 md:py-10 bg-transparent border-b border-transparent"
            : "py-4 md:py-6 bg-background/80 backdrop-blur-xl border-b border-foreground/5 shadow-sm"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className={`font-display text-2xl md:text-3xl italic font-light tracking-tight transition-all duration-700 hover:scale-[1.02] active:scale-95 z-50 ${
            isTransparent ? "text-white drop-shadow-md" : "text-foreground"
          }`}
        >
          Otton Crystais
        </Link>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-10 lg:gap-14">
          {navLinks.map(({ to, label }) => {
            const isActive = to === "/" ? currentPath === "/" : currentPath.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={`relative group flex flex-col items-center py-2 text-[11px] font-bold uppercase tracking-[.4em] transition-all duration-500 ${
                  isTransparent
                    ? isActive
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                    : isActive
                      ? "text-foreground"
                      : "text-foreground/40 hover:text-foreground"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] transition-all duration-500 origin-center ${
                    isTransparent
                      ? isActive
                        ? "w-full bg-white/60"
                        : "w-0 group-hover:w-full bg-white/40"
                      : isActive
                        ? "w-full bg-foreground/40"
                        : "w-0 group-hover:w-full bg-foreground/20"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right: flags + mobile menu toggle */}
        <div className="flex items-center gap-5 md:gap-8">
          <div className="hidden md:flex items-center gap-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-7 h-7 md:w-5 md:h-5 relative overflow-hidden rounded-full transition-all duration-700 hover:scale-125 shadow-sm border border-foreground/10 group ${
                  language === lang.code
                    ? "opacity-100 grayscale-0 ring-2 ring-foreground/30 scale-110"
                    : "opacity-30 grayscale hover:grayscale-0 hover:opacity-100"
                }`}
                title={lang.code.toUpperCase()}
              >
                <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                {lang.flag}
              </button>
            ))}
          </div>

          {/* Mobile toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`group relative p-2 z-50 transition-all duration-500 overflow-hidden rounded-full ${
              isTransparent ? "text-white" : "text-foreground"
            } ${mobileMenuOpen ? "bg-foreground/5" : "hover:bg-foreground/5"}`}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-500 rotate-0 hover:rotate-90" strokeWidth={1} />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-500 hover:scale-110" strokeWidth={1} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-background/98 backdrop-blur-3xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-20 px-8">
          <div className="flex flex-col items-center gap-10">
            {navLinks.map(({ to, label }, i) => {
              const isActive = to === "/" ? currentPath === "/" : currentPath.startsWith(to);
              return (
                <Link
                  key={to}
                  to={to}
                  className={`text-3xl md:text-4xl font-display italic tracking-[0.15em] transition-all duration-700 hover:scale-105 active:scale-95 ${
                    isActive ? "text-foreground opacity-100" : "text-foreground/40 hover:text-foreground/70"
                  }`}
                  style={{ 
                    transitionDelay: mobileMenuOpen ? `${100 * i + 300}ms` : '0ms',
                    transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(40px)',
                    opacity: mobileMenuOpen ? 1 : 0
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="w-20 h-px bg-foreground/10 transition-all duration-1000" style={{ transform: mobileMenuOpen ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: '700ms' }} />

          <div className="flex items-center gap-10 transition-all duration-1000" style={{ opacity: mobileMenuOpen ? 1 : 0, transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '800ms' }}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-14 h-14 relative overflow-hidden rounded-full transition-all duration-700 shadow-2xl border-2 border-foreground/5 ${
                  language === lang.code
                    ? "grayscale-0 scale-125 ring-4 ring-foreground/10"
                    : "grayscale opacity-30 hover:opacity-100 hover:grayscale-0"
                }`}
              >
                {lang.flag}
              </button>
            ))}
          </div>
          
          <div className="absolute bottom-20 text-[8px] font-bold uppercase tracking-[1em] text-foreground/20 italic">
            Otton Crystais Atelier
          </div>
        </div>
      </div>
    </>
  );
}
