import { ScrollReveal } from '@/components/base/GeometricElements';

export default function PromiseSection() {
  return (
    <section className="py-24 md:py-32 bg-background-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="geo-grid opacity-30 absolute inset-0" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-6 block" style={{ fontFamily: 'var(--font-label)' }}>
            The Ikubari Promise
          </span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            We turn potential into{" "}
            <span className="text-accent-500">purpose</span>, and purpose into{" "}
            <span className="text-[var(--brand-coral)]">impact</span>.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-foreground-600 leading-relaxed max-w-3xl">
            Creativity is architecture. We don&apos;t just teach subjects; we build minds that can think, create, and reimagine what is possible. Every learner is guided from who they are to where they can go.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}