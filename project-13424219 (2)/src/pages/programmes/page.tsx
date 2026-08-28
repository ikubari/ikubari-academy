import { useState } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { ScrollReveal } from '@/components/base/GeometricElements';
import { Link } from 'react-router-dom';
import { developmentTracks } from '@/content/academy';

const accentMap = {
  coral: { bg: 'bg-[var(--brand-coral)]', text: 'text-white', iconText: 'text-[var(--brand-coral)]' },
  blue: { bg: 'bg-accent-500', text: 'text-white', iconText: 'text-accent-500' },
  yellow: { bg: 'bg-[var(--brand-yellow)]', text: 'text-primary-500', iconText: 'text-[var(--brand-yellow)]' },
};

export default function Programmes() {
  const [activeId, setActiveId] = useState(developmentTracks[0].id);
  const active = developmentTracks.find((t) => t.id === activeId) || developmentTracks[0];
  const colors = accentMap[active.accent];

  return (
    <div className="min-h-screen bg-background-50">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-primary-500 overflow-hidden">
        <div className="absolute inset-0 geo-grid opacity-5 pointer-events-none" />
        <div className="absolute top-20 right-20 w-32 h-32 border border-accent-500/10 rotate-45 animate-float" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-500/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <span className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-6 block">Development Tracks</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Building the{" "}
              <span className="text-accent-400">Next Generation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Three development tracks — Summer (13–16), Youth (17–22) and Young Professionals (23–30) — that meet learners where they are and take them where they are meant to go.
            </p>
          </div>
        </div>
      </section>

      {/* Track selector */}
      <section className="py-24 md:py-32 bg-background-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Where are you on your journey?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {developmentTracks.map((track) => {
              const c = accentMap[track.accent];
              const isActive = track.id === activeId;
              return (
                <button
                  key={track.id}
                  onClick={() => setActiveId(track.id)}
                  className={`group text-left p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
                    isActive ? `${c.bg} ${c.text} border-transparent` : 'bg-white border-background-200 hover:border-accent-500/30'
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
              <div className="h-[300px] lg:h-auto relative">
                <img src={active.image} alt={active.title} className="w-full h-full object-cover object-center" />
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
                <h2 className="text-3xl font-bold text-primary-500 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {active.title}
                </h2>
                <p className="text-foreground-600 leading-relaxed mb-8">{active.description}</p>

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

                <div className="mb-6">
                  <div className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-3">Progression</div>
                  <div className="flex flex-wrap items-center gap-2">
                    {active.progression.map((step, i) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="px-3 py-1.5 bg-primary-500 text-white rounded-full text-xs font-medium">{step}</span>
                        {i < active.progression.length - 1 && <i className="ri-arrow-right-line text-foreground-400"></i>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/skills"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg text-sm font-semibold hover:bg-primary-600 transition-all duration-200 whitespace-nowrap cursor-pointer"
                    style={{ fontFamily: 'var(--font-label)' }}
                  >
                    Explore Skills
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary-500 text-primary-500 rounded-lg text-sm font-semibold hover:bg-primary-500 hover:text-white transition-all duration-200 whitespace-nowrap cursor-pointer"
                    style={{ fontFamily: 'var(--font-label)' }}
                  >
                    Join Ikubari
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 geo-grid opacity-5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Find your{" "}
              <span className="text-accent-400">track</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              Whatever your age, there is a place for you at Ikubari Academy.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white rounded-lg text-base font-semibold hover:bg-accent-600 transition-all duration-200 whitespace-nowrap cursor-pointer">
              Join Ikubari
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}