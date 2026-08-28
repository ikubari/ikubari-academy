import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/base/GeometricElements';
import { developmentTracks } from '@/content/academy';

const accentMap = {
  coral: { bg: 'bg-[var(--brand-coral)]', text: 'text-white', iconText: 'text-[var(--brand-coral)]' },
  blue: { bg: 'bg-accent-500', text: 'text-white', iconText: 'text-accent-500' },
  yellow: { bg: 'bg-[var(--brand-yellow)]', text: 'text-primary-500', iconText: 'text-[var(--brand-yellow)]' },
};

export default function DevelopmentTracksSection() {
  const [activeId, setActiveId] = useState(developmentTracks[0].id);
  const active = developmentTracks.find((t) => t.id === activeId) || developmentTracks[0];
  const colors = accentMap[active.accent];

  return (
    <section className="py-24 md:py-32 bg-background-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'var(--font-label)' }}>
              Development Tracks
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Where are you on your journey?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-foreground-600 leading-relaxed">
              Three development tracks meet you exactly where you are and take you where you are meant to go.
            </p>
          </ScrollReveal>
        </div>

        {/* Track selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {developmentTracks.map((track) => {
            const c = accentMap[track.accent];
            const isActive = track.id === activeId;
            return (
              <button
                key={track.id}
                onClick={() => setActiveId(track.id)}
                className={`group text-left p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? `${c.bg} ${c.text} border-transparent`
                    : 'bg-white border-background-200 hover:border-accent-500/30'
                }`}
              >
                <div className={`text-sm font-semibold mb-1 ${isActive ? 'opacity-80' : 'text-accent-500'}`} style={{ fontFamily: 'var(--font-label)' }}>
                  {track.age}
                </div>
                <div className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {track.title.replace(' Development Track', '')}
                </div>
                <div className={`text-sm ${isActive ? 'opacity-80' : 'text-foreground-500'}`}>
                  {track.positioning}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active track detail */}
        <div className="bg-white rounded-lg border border-background-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-[280px] lg:h-auto relative">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover object-center"
              />
              <div className={`absolute top-4 left-4 px-3 py-1.5 ${colors.bg} ${colors.text} rounded-full text-xs font-semibold`}>
                {active.age}
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-5`}>
                <i className={`${active.icon} text-2xl ${colors.text}`}></i>
              </div>

              <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-2 block">
                {active.positioning}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-500 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {active.title}
              </h3>
              <p className="text-foreground-600 leading-relaxed mb-6">{active.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-background-50 rounded-lg border border-background-200">
                  <div className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-2">Goal</div>
                  <p className="text-sm text-foreground-700 leading-relaxed">{active.goal}</p>
                </div>
                <div className="p-4 bg-background-50 rounded-lg border border-background-200">
                  <div className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-2">Outcome</div>
                  <p className="text-sm text-foreground-700 leading-relaxed">{active.outcome}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-3">Key Focus</div>
                <div className="flex flex-wrap gap-2">
                  {active.keyFocus.map((focus) => (
                    <span key={focus} className="px-3 py-1.5 bg-accent-500/10 text-accent-600 rounded-full text-xs font-medium">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/skills"
                className={`inline-flex items-center gap-2 px-6 py-3 ${colors.bg} ${colors.text} rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer`}
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Explore Skills for this Track
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}