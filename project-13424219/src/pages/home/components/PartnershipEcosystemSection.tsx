import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/base/GeometricElements';
import { partnershipCategories } from '@/content/academy';

export default function PartnershipEcosystemSection() {
  return (
    <section className="py-24 md:py-32 bg-background-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'var(--font-label)' }}>
              Partnership Ecosystem
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              We build better together.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnershipCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 80}>
              <div className="group h-full p-8 rounded-lg bg-white border border-background-200 hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-accent-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors">
                  <i className={`${category.icon} text-2xl text-accent-500`}></i>
                </div>
                <h3 className="text-lg font-bold text-primary-500 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {category.title}
                </h3>
                <p className="text-foreground-600 text-sm leading-relaxed">{category.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-14">
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-lg text-base font-semibold hover:bg-primary-600 transition-all duration-200 whitespace-nowrap cursor-pointer"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Partner with Ikubari
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}