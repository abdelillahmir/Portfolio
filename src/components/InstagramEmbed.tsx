import { useEffect, useRef, useState } from "react";

interface InstagramEmbedProps {
  shortcode: string;
  type: "post" | "reel";
}

export default function InstagramEmbed({ shortcode, type }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const embedUrl =
      type === "reel"
        ? `https://www.instagram.com/reel/${shortcode}/embed/`
        : `https://www.instagram.com/p/${shortcode}/embed/`;

    if (!containerRef.current) return;

    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.setAttribute("frameBorder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("allowTransparency", "true");
    iframe.style.width = "100%";
    iframe.style.minHeight = type === "reel" ? "580px" : "480px";
    iframe.style.border = "none";
    iframe.style.borderRadius = "12px";
    iframe.style.overflow = "hidden";
    iframe.style.display = "block";
    iframe.onload = () => setLoaded(true);

    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(iframe);
  }, [shortcode, type]);

  return (
    <div className="relative rounded-xl overflow-hidden bg-neutral-900/50 border border-white/[0.06]">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/80 animate-pulse rounded-xl">
          <div className="flex flex-col items-center gap-2 text-white/30">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span className="text-xs">Loading</span>
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        className="w-full max-w-[400px] mx-auto [&_iframe]:rounded-none [&>iframe]:border-0 [&>iframe]:shadow-none"
        style={{
          clipPath: "inset(0 0 56px 0)",
          marginBottom: "-56px",
        }}
      />
    </div>
  );
}
