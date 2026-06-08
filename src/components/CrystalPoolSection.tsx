import InstagramEmbed from "./InstagramEmbed";
import { crystalPoolSection, crystalPoolCategories } from "../data/portfolio";
import { Droplets } from "lucide-react";

export default function CrystalPoolSection() {
  return (
    <section id={crystalPoolSection.id} className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[11px] font-mono text-teal-400/80 tracking-[0.2em] uppercase block mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            {crystalPoolSection.title}
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            {crystalPoolSection.subtitle}
          </p>
          <div className="mt-4 h-px bg-gradient-to-r from-teal-500/40 via-teal-500/10 to-transparent" />
        </div>

        <div className="space-y-16">
          {crystalPoolCategories.map((category, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="w-4 h-4 text-teal-400" />
                <h3 className="text-lg font-semibold text-white">
                  {category.label}
                </h3>
                <span className="text-xs text-neutral-500 font-mono">
                  ({category.posts.length})
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.posts.map((post) => (
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
    </section>
  );
}
