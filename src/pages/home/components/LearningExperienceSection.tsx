import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/base/GeometricElements';
import { deliveryModel } from '@/content/academy';

const stages = ['Discover', 'Think', 'Design', 'Create', 'Share'];

export default function LearningExperienceSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'var(--font-label)' }}>
              Learning Experience
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              A journey from idea to impact.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-foreground-600 leading-relaxed">
              Every programme follows a structured creative journey you don&apos;t just learn you build, iterate, and create real outputs.
            </p>
          </ScrollReveal>
        </div>

        {/* Creative journey stages */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {stages.map((stage, index) => (
            <ScrollReveal key={stage} delay={index * 80}>
              <div className="group h-full p-6 rounded-lg bg-background-50 border border-background-200 hover:border-accent-500/30 transition-all duration-300 text-center">
                <div className="w-10 h-10 mx-auto bg-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                    {index + 1}
                  </span>
                </div>
                <div className="text-sm font-bold text-primary-500 uppercase tracking-wider" style={{ fontFamily: 'var(--font-label)' }}>
                  {stage}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Delivery model */}
        <ScrollReveal>
          <div className="rounded-lg bg-primary-500 p-8 md:p-12 relative overflow-hidden">
            <div className="geo-grid opacity-5 absolute inset-0 pointer-events-none" />
            <div className="relative">
              <div className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-4" style={{ fontFamily: 'var(--font-label)' }}>
                Our Delivery Model
              </div>
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                {deliveryModel.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 md:gap-4">
                    <span className="px-5 py-3 bg-white/10 border border-white/15 rounded-lg text-white text-sm font-semibold whitespace-nowrap">
                      {step}
                    </span>
                    {index < deliveryModel.length - 1 && (
                      <i className="ri-arrow-down-line text-accent-400 hidden md:block"></i>
                    )}
                    {index < deliveryModel.length - 1 && (
                      <i className="ri-arrow-right-line text-accent-400 md:hidden"></i>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/learning-experience"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white rounded-lg text-sm font-semibold hover:bg-accent-600 transition-all duration-200 whitespace-nowrap cursor-pointer"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  Explore the Learning Experience
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}