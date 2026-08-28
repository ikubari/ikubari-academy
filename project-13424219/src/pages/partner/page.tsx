import { useState } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { ScrollReveal } from '@/components/base/GeometricElements';
import { Link } from 'react-router-dom';
import { partnershipCategories } from '@/content/academy';

export default function Partners() {
  const [selected, setSelected] = useState<string | null>(null);

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
            <span className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-6 block">Partnership Ecosystem</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              We build better{" "}
              <span className="text-accent-400">together</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Great things happen when organisations come together. Partners help us deliver world-class skills development to the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership categories */}
      <section className="py-24 md:py-32 bg-background-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'var(--font-label)' }}>
                Ways to Partner
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-500 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Choose how you want to build with us
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipCategories.map((category, index) => {
              const isActive = selected === category.title;
              return (
                <ScrollReveal key={category.title} delay={index * 80}>
                  <button
                    onClick={() => setSelected(isActive ? null : category.title)}
                    className={`group h-full w-full text-left p-8 rounded-lg border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-primary-500 border-primary-500 text-white'
                        : 'bg-white border-background-200 hover:border-accent-500/30'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${isActive ? 'bg-white/10' : 'bg-accent-500/10'}`}>
                      <i className={`${category.icon} text-2xl ${isActive ? 'text-accent-400' : 'text-accent-500'}`}></i>
                    </div>
                    <h3 className={`text-lg font-bold mb-3 ${isActive ? 'text-white' : 'text-primary-500'}`} style={{ fontFamily: 'var(--font-heading)' }}>
                      {category.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isActive ? 'text-white/70' : 'text-foreground-600'}`}>
                      {category.description}
                    </p>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Partner CTA */}
          <ScrollReveal>
            <div className="mt-16 text-center">
              <p className="text-foreground-600 mb-6">
                {selected ? `You selected: ${selected}. Let's talk about what we can build together.` : 'Not sure which fits? Let\u2019s talk.'}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-lg text-base font-semibold hover:bg-primary-600 transition-all duration-200 whitespace-nowrap cursor-pointer"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Start a Partnership
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-500 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Why partner with Ikubari?
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'ri-user-smile-line', title: 'Shape the future', description: 'Help develop the next generation of creative, tech-savvy and purpose-driven talent.' },
              { icon: 'ri-flashlight-line', title: 'Amplify your impact', description: 'Extend your reach and deepen your social impact through skills development.' },
              { icon: 'ri-group-line', title: 'Build the pipeline', description: 'Access emerging talent and create real pathways into employment and growth.' },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="group h-full p-8 rounded-lg bg-background-50 border border-background-200 hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-accent-500/10 rounded-lg flex items-center justify-center mb-6">
                    <i className={`${item.icon} text-2xl text-accent-500`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-primary-500 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </h3>
                  <p className="text-foreground-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}