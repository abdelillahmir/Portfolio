import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "crypto-club", label: "Crypto Club" },
  { id: "crystal-pool", label: "Crystal Pool" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="text-white font-semibold tracking-tight text-lg hover:text-cyan-400 transition-colors"
        >
          A6delillah
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-4 py-2 text-sm text-neutral-300 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-neutral-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left px-4 py-3 text-sm text-neutral-300 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
