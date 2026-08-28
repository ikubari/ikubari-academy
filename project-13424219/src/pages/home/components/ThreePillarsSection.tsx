import { ScrollReveal } from '@/components/base/GeometricElements';
import { trainingPillars } from '@/content/academy';

function GeometricMarker({ shape }: { shape: 'square' | 'circle' | 'triangle' }) {
  if (shape === 'square') {
    return <div className="w-14 h-14 border-2 border-accent-500/40 rotate-45" />;
  }
  if (shape === 'circle') {
    return <div className="w-14 h-14 border-2 border-accent-500/40 rounded-full" />;
  }
  return (
    <div className="w-14 h-14 flex items-center justify-center">
      <div className="w-0 h-0 border-l-[24px] border-r-[24px] border-b-[40px] border-l-transparent border-r-transparent border-b-accent-500/40" />
    </div>
  );
}

export default function ThreePillarsSection() {
  return (
    <section className="py-24 md:py-32 bg-background-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'var(--font-label)' }}>
              How We Develop People
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Three pillars. One whole person.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-foreground-600 leading-relaxed">
              We develop competence, character and purpose in equal measure.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainingPillars.map((pillar, index) => (
            <ScrollReveal key={pillar.number} delay={index * 120}>
              <div className="group h-full p-8 rounded-lg bg-white border border-background-200 hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <GeometricMarker shape={pillar.shape} />
                  <span className="text-4xl font-bold text-primary-500/10" style={{ fontFamily: 'var(--font-heading)' }}>
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-primary-500 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  {pillar.title}
                </h3>
                <div className="text-accent-500 text-sm font-semibold uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-label)' }}>
                  {pillar.tagline}
                </div>
                <p className="text-foreground-600 text-sm leading-relaxed mb-6">{pillar.description}</p>

                <div className="flex flex-wrap gap-2">
                  {pillar.focus.map((f) => (
                    <span key={f} className="px-2.5 py-1 bg-background-100 border border-background-200 rounded-full text-xs text-foreground-600">
                      {f}
                    </span>
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