import { ScrollReveal } from '@/components/base/GeometricElements';

export default function CreativeMindSection() {
  return (
    <section className="py-24 md:py-36 bg-primary-500 relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="geo-grid opacity-5 absolute inset-0" />
        <div className="absolute top-[-15%] right-[-5%] w-[420px] h-[420px] border border-accent-500/15 rotate-45 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-[-20%] left-[-5%] w-[380px] h-[380px] border border-accent-500/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[25%] left-[12%] w-20 h-20 bg-accent-500/10 rotate-12 animate-float" style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-[30%] right-[15%] w-16 h-16 border border-accent-500/20 rotate-45 animate-float" style={{ animationDelay: '2.2s' }} />
        <div className="absolute top-[55%] left-[45%] w-6 h-6 bg-[var(--brand-coral)]/30 rounded-full animate-pulse-subtle" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="text-accent-400 text-sm font-semibold tracking-[0.3em] uppercase mb-8 block" style={{ fontFamily: 'var(--font-label)' }}>
            The Creative Mind
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.02] mb-10" style={{ fontFamily: 'var(--font-heading)' }}>
            THE MIND IS YOUR
            <br />
            <span className="text-accent-400">GREATEST ASSET.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Every skill begins as a thought. We don&apos;t just train hands we build minds that can think, create, and reimagine what is possible.
          </p>
        </ScrollReveal>

        {/* Geometric progression */}
        <ScrollReveal delay={300}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="w-16 h-16 border-2 border-accent-500/40 rotate-45 flex items-center justify-center">
              <span className="-rotate-45 text-accent-400 text-xl" style={{ fontFamily: 'var(--font-heading)' }}>1</span>
            </div>
            <div className="hidden md:block w-12 h-[2px] bg-accent-500/30" />
            <div className="w-16 h-16 border-2 border-accent-500/40 rounded-full flex items-center justify-center">
              <span className="text-accent-400 text-xl" style={{ fontFamily: 'var(--font-heading)' }}>2</span>
            </div>
            <div className="hidden md:block w-12 h-[2px] bg-accent-500/30" />
            <div className="w-16 h-16 border-2 border-[var(--brand-coral)]/50 flex items-center justify-center">
              <span className="text-[var(--brand-coral)] text-xl" style={{ fontFamily: 'var(--font-heading)' }}>3</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}