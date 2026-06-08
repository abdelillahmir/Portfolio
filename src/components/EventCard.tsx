import { useState } from "react";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";
import InstagramEmbed from "./InstagramEmbed";
import type { PortfolioEvent } from "../data/portfolio";

interface EventCardProps {
  event: PortfolioEvent;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div className="group relative">
      <div
        className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/10 to-transparent"
      />
      <div className="absolute -left-[11px] top-6 w-5 h-5 rounded-full bg-neutral-900 border-2 border-cyan-500/60 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-cyan-400" />
      </div>

      <div className="ml-8 bg-neutral-900/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/[0.1]">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[11px] font-mono text-cyan-400/80 tracking-wider uppercase">
                Event {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white tracking-tight">
              {event.title}
            </h3>
            <div className="flex items-center gap-2 mt-1.5">
              <Calendar className="w-3.5 h-3.5 text-neutral-500" />
              <span className="text-sm text-neutral-400">{event.date}</span>
            </div>
          </div>
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-neutral-400">
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out ${
            expanded ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-6 pb-6 space-y-8">
            {event.phases.map((phase, phaseIndex) => (
              <div key={phaseIndex}>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide ${
                      phase.label === "Pre-event"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : phase.label === "Event Day"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : phase.label === "After-event"
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        : "bg-white/[0.06] text-neutral-300 border border-white/[0.08]"
                    }`}
                  >
                    {phase.label}
                  </span>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.posts.map((post) => (
                    <InstagramEmbed
                      key={post.shortcode}
                      shortcode={post.shortcode}
                      type={post.type}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
