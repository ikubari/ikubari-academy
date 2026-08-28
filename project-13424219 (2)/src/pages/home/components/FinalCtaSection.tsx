import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/base/GeometricElements';

export default function FinalCtaSection() {
  return (
    <section className="py-24 md:py-32 bg-primary-500 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="geo-grid opacity-5 absolute inset-0" />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] border border-accent-500/10 rotate-45 animate-float" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] border border-accent-500/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to build what&apos;s{" "}
            <span className="text-accent-400">next</span>?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
          {/* Learner path */}
          <ScrollReveal delay={100}>
            <div className="h-full p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-4" style={{ fontFamily: 'var(--font-label)' }}>
                For Learners
              </div>
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Start your journey
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Explore programmes, find your development track, and begin building the skills for what&apos;s next.
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white rounded-lg text-sm font-semibold hover:bg-accent-600 transition-all duration-200 whitespace-nowrap cursor-pointer"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Explore Programmes
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </ScrollReveal>

          {/* Partner path */}
          <ScrollReveal delay={200}>
            <div className="h-full p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-4" style={{ fontFamily: 'var(--font-label)' }}>
                For Partners
              </div>
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Build with us
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Sponsor, host, mentor or fund the next generation. Find the partnership that fits your mission.
              </p>
              <Link
                to="/partner"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg text-sm font-semibold hover:bg-white/10 transition-all duration-200 whitespace-nowrap cursor-pointer"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Partner with Ikubari
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}