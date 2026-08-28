import { useState } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { ScrollReveal } from '@/components/base/GeometricElements';
import { Link } from 'react-router-dom';
import { skillTracks, developmentTracks } from '@/content/academy';

const stages = ['Discovery', 'Building', 'Mastery'];

export default function Skills() {
  const [openSkill, setOpenSkill] = useState<string | null>(skillTracks[0].title);

  return (
    <div className="min-h-screen bg-background-50">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-20 bg-primary-500 overflow-hidden">
        <div className="absolute inset-0 geo-grid opacity-5 pointer-events-none" />
        <div className="absolute top-20 right-20 w-32 h-32 border border-accent-500/10 rotate-45 animate-float" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-500/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <span className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-6 block">Core Skill Tracks</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Six ways to{" "}
              <span className="text-accent-400">build the mind</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Six core skill tracks run through every development track — each with a clear focus, a set of practical skills, and a tangible outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Six core skill tracks */}
      <section className="py-24 md:py-32 bg-background-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillTracks.map((skill, index) => (
              <ScrollReveal key={skill.number} delay={index * 80}>
                <div className="group h-full flex flex-col p-8 rounded-lg bg-white border border-background-200 hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-accent-500/10 rounded-lg flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                      <i className={`${skill.icon} text-2xl text-accent-500`}></i>
                    </div>
                    <span className="text-4xl font-bold text-primary-500/10" style={{ fontFamily: 'var(--font-heading)' }}>
                      {skill.number}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-primary-500 mb-4 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                    {skill.title}
                  </h2>

                  <div className="mb-4">
                    <div className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-1.5">Focus</div>
                    <p className="text-sm text-foreground-600 leading-relaxed">{skill.focus}</p>
                  </div>

                  <div className="mb-4 flex-1">
                    <div className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-1.5">Core Skills</div>
                    <div className="flex flex-wrap gap-2">
                      {skill.coreSkills.map((s) => (
                        <span key={s} className="px-2.5 py-1 bg-background-100 border border-background-200 rounded-full text-xs text-foreground-600">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-1.5">Outcome</div>
                    <p className="text-sm text-foreground-600 leading-relaxed">{skill.outcome}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Training Matrix */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'var(--font-label)' }}>
                Training Matrix
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-500 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                How every skill deepens across the tracks
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-foreground-600 leading-relaxed">
                Each core skill track develops through a progression — from Discovery, to Building, to Mastery — across the three development tracks. Select a skill to see its detail.
              </p>
            </ScrollReveal>
          </div>

          {/* Desktop matrix header */}
          <div className="hidden lg:grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-px bg-background-200 border border-background-200 rounded-lg overflow-hidden mb-6">
            <div className="p-5 bg-primary-500 text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-label)' }}>
              Core Skill
            </div>
            {developmentTracks.map((track) => (
              <div key={track.id} className="p-5 bg-primary-500 text-white text-sm text-center">
                <div className="font-semibold" style={{ fontFamily: 'var(--font-label)' }}>
                  {track.title.replace(' Development Track', '').toUpperCase()}
                </div>
                <div className="text-white/60 text-xs mt-1">{track.age}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {skillTracks.map((skill) => {
              const isOpen = openSkill === skill.title;
              return (
                <div key={skill.number} className="rounded-lg border border-background-200 bg-background-50 overflow-hidden">
                  {/* Row header (matrix view + accordion trigger) */}
                  <button
                    onClick={() => setOpenSkill(isOpen ? null : skill.title)}
                    className="w-full text-left grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] items-center gap-2 p-5 cursor-pointer transition-colors hover:bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className={`${skill.icon} text-lg text-accent-500`}></i>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary-500" style={{ fontFamily: 'var(--font-heading)' }}>
                          {skill.title}
                        </div>
                        <div className="text-xs text-foreground-500 lg:hidden">Tap to expand</div>
                      </div>
                      <i className={`ri-${isOpen ? 'subtract' : 'add'}-line text-accent-500 lg:hidden ml-auto`}></i>
                    </div>

                    {/* Stage cells */}
                    {stages.map((stage, si) => (
                      <div key={stage} className="hidden lg:flex items-center gap-2">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            si === 0 ? 'bg-[var(--brand-coral)]' : si === 1 ? 'bg-accent-500' : 'bg-[var(--brand-yellow)]'
                          }`}
                        />
                        <span className="text-sm text-foreground-700">{stage}</span>
                      </div>
                    ))}
                  </button>

                  {/* Expanded detail */}
                  {isOpen && (
                    <div className="p-5 md:p-6 border-t border-background-200 bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <div className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-2">Focus</div>
                          <p className="text-sm text-foreground-600 leading-relaxed">{skill.focus}</p>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-2">Core Skills</div>
                          <div className="flex flex-wrap gap-2">
                            {skill.coreSkills.map((s) => (
                              <span key={s} className="px-2.5 py-1 bg-background-100 border border-background-200 rounded-full text-xs text-foreground-600">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-2">Outcome</div>
                          <p className="text-sm text-foreground-600 leading-relaxed">{skill.outcome}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 geo-grid opacity-5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to start{" "}
              <span className="text-accent-400">building</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              Choose a development track, explore the skills, and begin your journey.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/programs" className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white rounded-lg text-base font-semibold hover:bg-accent-600 transition-all duration-200 whitespace-nowrap cursor-pointer">
                Explore Programmes
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white rounded-lg text-base font-semibold hover:bg-white/10 transition-all duration-200 whitespace-nowrap cursor-pointer">
                Join Ikubari
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}