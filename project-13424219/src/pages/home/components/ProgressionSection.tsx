import { ScrollReveal } from '@/components/base/GeometricElements';
import { developmentTracks } from '@/content/academy';

export default function ProgressionSection() {
  return (
    <section className="py-24 md:py-32 bg-primary-500 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="geo-grid opacity-5 absolute inset-0" />
        <div className="absolute top-[-10%] right-[-5%] w-80 h-80 border border-accent-500/10 rotate-45 animate-float" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 border border-accent-500/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'var(--font-label)' }}>
              Development Progression
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              From potential to purpose.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developmentTracks.map((track, index) => (
            <ScrollReveal key={track.id} delay={index * 120}>
              <div className="h-full p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-2" style={{ fontFamily: 'var(--font-label)' }}>
                  {track.age} · {track.title.replace(' Development Track', '')}
                </div>
                <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                  {track.positioning}
                </h3>

                <div className="flex flex-col gap-3">
                  {track.progression.map((step, stepIndex) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-accent-400 text-sm font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                            {stepIndex + 1}
                          </span>
                        </div>
                        <span className="text-white text-sm font-medium">{step}</span>
                      </div>
                      {stepIndex < track.progression.length - 1 && (
                        <i className="ri-arrow-down-line text-accent-500/50 flex-shrink-0"></i>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}