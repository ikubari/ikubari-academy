import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { ScrollReveal } from '@/components/base/GeometricElements';
import { Link } from 'react-router-dom';
import { trainingPillars, developmentTracks } from '@/content/academy';

export default function About() {
  return (
    <div className="min-h-screen bg-background-50">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-primary-500 overflow-hidden">
        <div className="absolute inset-0 geo-grid opacity-5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-40 h-40 border border-accent-500/10 rotate-45 animate-float" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent-500/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <span className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-6 block">About IKUBARI</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              An ecosystem for{" "}
              <span className="text-accent-400">building the next generation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Ikubari Academy equips young people with the skills and mindset to thrive in a changing world.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 md:py-32 bg-background-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="h-full p-8 md:p-10 bg-white rounded-lg border border-background-200">
                <div className="w-14 h-14 bg-accent-500/10 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-eye-line text-2xl text-accent-500"></i>
                </div>
                <h2 className="text-xl font-bold text-primary-500 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Our Vision
                </h2>
                <p className="text-foreground-600 leading-relaxed text-base">
                  To nurture a generation of creative, tech-savvy and purpose-driven young people who shape the future with innovation, confidence and impact.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="h-full p-8 md:p-10 bg-white rounded-lg border border-background-200">
                <div className="w-14 h-14 bg-accent-500/10 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-flag-2-line text-2xl text-accent-500"></i>
                </div>
                <h2 className="text-xl font-bold text-primary-500 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Our Mission
                </h2>
                <p className="text-foreground-600 leading-relaxed text-base">
                  Equip youths and young adults with practical skills in media and technology through hands-on learning, mentorship and collaboration.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <ScrollReveal>
              <div className="h-full p-8 md:p-10 rounded-lg bg-primary-500 text-white relative overflow-hidden">
                <div className="geo-grid opacity-5 absolute inset-0 pointer-events-none" />
                <div className="relative">
                  <div className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-4" style={{ fontFamily: 'var(--font-label)' }}>
                    The Problem
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    Too many young people are left unprepared.
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Many leave education without the practical skills, confidence or direction they need to thrive in a rapidly changing world.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="h-full p-8 md:p-10 rounded-lg border border-background-200 bg-background-50 relative overflow-hidden">
                <div className="relative">
                  <div className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4" style={{ fontFamily: 'var(--font-label)' }}>
                    The Solution
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-500 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    Hands-on learning that builds real capability.
                  </h3>
                  <p className="text-foreground-600 leading-relaxed">
                    Ikubari Academy closes that gap through practical training in media and technology, guided by mentorship and real projects.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Three Training Pillars */}
      <section className="py-24 md:py-32 bg-background-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'var(--font-label)' }}>
                How We Develop People
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-500 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Three training pillars
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainingPillars.map((pillar, index) => (
              <ScrollReveal key={pillar.number} delay={index * 120}>
                <div className="group h-full p-8 rounded-lg bg-white border border-background-200 hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mb-5">
                    <i className={`${pillar.icon} text-xl text-accent-500`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary-500 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    {pillar.title}
                  </h3>
                  <div className="text-accent-500 text-sm font-semibold uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-label)' }}>
                    {pillar.tagline}
                  </div>
                  <p className="text-foreground-600 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Development Tracks */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <ScrollReveal>
              <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'var(--font-label)' }}>
                Development Tracks
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-500 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Three tracks, one journey
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {developmentTracks.map((track, index) => (
              <ScrollReveal key={track.id} delay={index * 120}>
                <div className="group h-full flex flex-col rounded-lg bg-background-50 border border-background-200 overflow-hidden hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="h-40 overflow-hidden">
                    <img src={track.image} alt={track.title} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-accent-500 text-xs font-semibold tracking-wider uppercase mb-2" style={{ fontFamily: 'var(--font-label)' }}>
                      {track.age}
                    </div>
                    <h3 className="text-lg font-bold text-primary-500 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      {track.title}
                    </h3>
                    <p className="text-foreground-600 text-sm leading-relaxed">{track.positioning}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-24 md:py-32 bg-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 geo-grid opacity-5 pointer-events-none" />
        <div className="absolute top-10 right-20 w-32 h-32 border border-accent-500/10 rotate-45 animate-float" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-6 block" style={{ fontFamily: 'var(--font-label)' }}>
              Our Purpose
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Creativity is{" "}
              <span className="text-accent-400">architecture</span>.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
              We build minds that can think, create and reimagine what is possible — so the next generation can shape the future with innovation, confidence and impact.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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