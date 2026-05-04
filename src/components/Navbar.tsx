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
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-3">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-6 h-6 md:w-5 md:h-5 relative overflow-hidden rounded-full transition-all duration-500 hover:scale-125 shadow-sm border border-foreground/10 ${
                  language === lang.code
                    ? "opacity-100 grayscale-0 ring-2 ring-foreground/30 scale-110"
                    : "opacity-40 grayscale hover:grayscale-0 hover:opacity-100"
                }`}
                title={lang.code.toUpperCase()}
              >
                {lang.flag}
              </button>
            ))}
          </div>

          {/* Mobile toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 z-50 transition-colors duration-500 ${
              isTransparent ? "text-white" : "text-foreground"
            }`}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-background/95 backdrop-blur-2xl transition-all duration-1000 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-16 px-6 pt-32">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map(({ to, label }) => {
              const isActive = to === "/" ? currentPath === "/" : currentPath.startsWith(to);
              return (
                <Link
                  key={to}
                  to={to}
                  className={`text-xl font-display italic tracking-widest transition-all duration-500 ${
                    isActive ? "text-foreground scale-110" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="w-12 h-px bg-foreground/10" />

          <div className="flex items-center gap-8">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-12 h-12 relative overflow-hidden rounded-full transition-all duration-500 shadow-xl border-2 border-foreground/5 ${
                  language === lang.code
                    ? "grayscale-0 scale-125 ring-4 ring-foreground/10 shadow-foreground/10"
                    : "grayscale opacity-40 hover:opacity-100 hover:grayscale-0"
                }`}
              >
                {lang.flag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
