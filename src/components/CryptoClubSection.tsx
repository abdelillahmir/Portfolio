import EventCard from "./EventCard";
import InstagramEmbed from "./InstagramEmbed";
import { cryptoClubSection, cryptoClubEvents, cryptoClubRandomPosts } from "../data/portfolio";
import { Sparkles } from "lucide-react";

export default function CryptoClubSection() {
  return (
    <section id={cryptoClubSection.id} className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[11px] font-mono text-cyan-400/80 tracking-[0.2em] uppercase block mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            {cryptoClubSection.title}
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            {cryptoClubSection.subtitle}
          </p>
          <div className="mt-4 h-px bg-gradient-to-r from-cyan-500/40 via-cyan-500/10 to-transparent" />
        </div>

        <div className="space-y-6">
          {cryptoClubEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-semibold text-white">Holiday & Miscellaneous Posts</h3>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cryptoClubRandomPosts.map((post) => (
              <InstagramEmbed
                key={post.shortcode}
                shortcode={post.shortcode}
                type={post.type}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
