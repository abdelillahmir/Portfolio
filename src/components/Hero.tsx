import { Send, MessageCircle, Quote } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/[0.07] rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/[0.05] rounded-full blur-[100px] translate-y-1/3" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="inline-block mb-6">
          <span className="text-[11px] font-mono text-cyan-400/80 tracking-[0.25em] uppercase border border-cyan-500/20 rounded-full px-4 py-1.5 bg-cyan-500/[0.06]">
            Welcome to my Creative Portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          Check my Online
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Presence
          </span>
        </h1>

        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
          Multimedia designer & event manager — bringing brands to life through
          visual identity, social media content, and event production.
        </p>

        <div className="flex items-center justify-center gap-3">
          <a
            href="#"
            className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/[0.08] transition-all duration-300"
            title="Telegram"
          >
            <Send className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/[0.08] transition-all duration-300"
            title="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/[0.08] transition-all duration-300"
            title="Quote"
          >
            <Quote className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
