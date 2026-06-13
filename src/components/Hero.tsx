"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Send, MessageCircle, Quote } from "lucide-react";

// ─── Floating skill tags drifting in the background ───────────────────────
const SKILL_TAGS = [
  "VIDEO EDIT", "MOTION DESIGN", "BRANDING", "UI / UX",
  "SOCIAL MEDIA", "CANVA", "PREMIERE PRO", "FIGMA", "AFTER FX",
  "CAPCUT", "DAVINCI", "PHOTOSHOP",
];

function FloatingTags() {
  const tags = useRef(
    SKILL_TAGS.map((label) => ({
      label,
      left: 5 + Math.random() * 88,
      top: 8 + Math.random() * 82,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 4,
    }))
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {tags.current.map((t, i) => (
        <span
          key={i}
          className="absolute font-mono text-[9px] tracking-widest text-cyan-400/20 border border-cyan-400/10 rounded px-2 py-1 uppercase select-none"
          style={{
            left: `${t.left}%`,
            top: `${t.top}%`,
            animation: `floatTag ${t.duration}s ease-in-out ${t.delay}s infinite`,
          }}
        >
          {t.label}
        </span>
      ))}
    </div>
  );
}

// ─── Dot particle field ────────────────────────────────────────────────────
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number | null = null;

    const dots = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 0.6 + Math.random() * 1.2,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      alpha: 0.08 + Math.random() * 0.18,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,210,190,${d.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      if (raf !== null) {
        cancelAnimationFrame(raf);
      }
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
    />
  );
}

// ─── Typewriter for the badge ──────────────────────────────────────────────
function Typewriter({ text, startDelay = 400 }: { text: string; startDelay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 600);
        }
      }, 38);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(t);
  }, [text, startDelay]);

  return (
    <span>
      {displayed}
      {!done && (
        <span className="ml-0.5 inline-block h-[10px] w-[5px] translate-y-[1px] animate-[blink_0.75s_step-end_infinite] bg-cyan-400" />
      )}
    </span>
  );
}

// ─── Animated word reveal ──────────────────────────────────────────────────
function WordReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <span
      className="inline-block transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(26px)",
      }}
    >
      {children}
    </span>
  );
}

// ─── Stat counter ──────────────────────────────────────────────────────────
function StatCounter({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className="flex flex-col items-center gap-0.5 transition-all duration-600"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(10px)" }}
    >
      <span className="font-mono text-lg font-bold text-cyan-400">{value}</span>
      <span className="font-mono text-[9px] uppercase tracking-widest text-white/25">{label}</span>
    </div>
  );
}

// ─── Main Hero ─────────────────────────────────────────────────────────────
export default function Hero() {
  const [scanDone, setScanDone] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // scan line takes ~1.8s, then reveal content
    const t1 = setTimeout(() => setScanDone(true), 1900);
    const t2 = setTimeout(() => setShowContent(true), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
      {/* Keyframes injected once */}
      <style>{`
        @keyframes floatTag {
          0%   { transform: translateY(0);    opacity: 0.15; }
          50%  { transform: translateY(-10px); opacity: 0.35; }
          100% { transform: translateY(0);    opacity: 0.15; }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        @keyframes scanDown {
          0%   { top: -4px; opacity: 1; }
          88%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glitch {
          0%,100% { clip-path: none; transform: none; }
          8%  { clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); transform: translateX(-3px); }
          10% { clip-path: none; transform: none; }
          18% { clip-path: polygon(0 55%, 100% 55%, 100% 70%, 0 70%); transform: translateX(2px); }
          20% { clip-path: none; transform: none; }
        }
      `}</style>

      <section
        id="hero"
        className="relative min-h-screen overflow-hidden"
        style={{ background: "#080c0c" }}
      >
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-48 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,210,190,0.08) 0%, transparent 70%)" }} />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,180,160,0.05) 0%, transparent 70%)" }} />

        {/* Particle dots */}
        <ParticleField />

        {/* Floating skill tags */}
        <FloatingTags />

        {/* ── SCAN LINE ── */}
        {!scanDone && (
          <div
            className="pointer-events-none absolute left-0 z-30 h-[2px] w-full"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #00d2be 20%, #22ffe8 50%, #00d2be 80%, transparent 100%)",
              boxShadow: "0 0 18px 4px rgba(0,210,190,0.55)",
              animation: "scanDown 1.85s cubic-bezier(0.4,0,0.2,1) 0.1s forwards",
              top: "-4px",
            }}
          />
        )}

        {/* ── HERO CONTENT ── */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

          {/* Badge with typewriter */}
          <div
            className="mb-7 inline-block"
            style={{
              opacity: showContent ? 1 : 0,
              transition: "opacity 0.5s ease 0s",
            }}
          >
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-4 py-1.5 font-mono text-[10px] tracking-[0.22em] text-cyan-400/80">
              {showContent && (
                <Typewriter text="WELCOME TO MY CREATIVE PORTFOLIO" startDelay={100} />
              )}
            </span>
          </div>

          {/* Headline — word-by-word reveal */}
          <h1 className="mb-2 text-5xl font-black leading-[1.08] tracking-tight text-white md:text-7xl">
            <WordReveal delay={1700}>Check</WordReveal>{" "}
            <WordReveal delay={1850}>my</WordReveal>{" "}
            <WordReveal delay={2000}>Online</WordReveal>
          </h1>

          {/* Gradient line */}
          <p
            className="mb-6 text-5xl font-black leading-[1.08] tracking-tight md:text-7xl"
            style={{
              background: "linear-gradient(90deg, #00d2be, #22ffe8, #00d2be)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease 2.3s, transform 0.6s ease 2.3s",
            }}
          >
            Presence 2023-2025
          </p>

          {/* Subheadline */}
          <p
            className="mb-9 max-w-md text-base leading-relaxed text-white/40 md:text-lg"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.6s ease 2.7s, transform 0.6s ease 2.7s",
            }}
          >
            Multimedia designer &amp; event manager — bringing brands to life through
            visual identity, social media content, and event production.
          </p>

          {/* CTA icons */}
          <div
            className="mb-14 flex items-center gap-3"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease 3.0s, transform 0.5s ease 3.0s",
            }}
          >
            {[
              { icon: Send, label: "Telegram", hover: "hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08]" },
              { icon: MessageCircle, label: "WhatsApp", hover: "hover:text-emerald-400 hover:border-emerald-400/30 hover:bg-emerald-400/[0.08]" },
              { icon: Quote, label: "Quote", hover: "hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-400/[0.08]" },
            ].map(({ icon: Icon, label, hover }) => (
              <a
                key={label}
                href="#"
                title={label}
                className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.05] text-white/40 transition-all duration-300 ${hover}`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* ── Stats bar ── */}
          <div
            className="flex items-center gap-7"
            style={{
              opacity: showContent ? 1 : 0,
              transition: "opacity 0.6s ease 3.3s",
            }}
          >
            <StatCounter value="3+" label="Years Leading"  delay={3400} />
            <div className="h-8 w-px bg-white/[0.08]" />
            <StatCounter value="2"  label="Brands Built"  delay={3550} />
            <div className="h-8 w-px bg-white/[0.08]" />
            <StatCounter value="50+" label="Designs Made" delay={3700} />
            <div className="h-8 w-px bg-white/[0.08]" />
            <StatCounter value="∞"  label="Ideas Left"   delay={3850} />
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-28"
          style={{ background: "linear-gradient(to bottom, transparent, #080c0c)" }}
        />
      </section>
    </>
  );
}
