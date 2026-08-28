import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { ScrollReveal } from '@/components/base/GeometricElements';
import { Link } from 'react-router-dom';
import { deliveryModel } from '@/content/academy';

const stages = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Explore ideas, research trends and identify opportunities. Learners immerse themselves in the creative landscape, understand audiences and find inspiration.',
    icon: 'ri-compass-3-line',
    activities: ['Research & trend analysis', 'Audience understanding', 'Inspiration gathering', 'Problem identification'],
  },
  {
    number: '02',
    title: 'THINK',
    description: 'Question and analyse. Develop critical thinking that helps you evaluate and refine concepts into structured ideas.',
    icon: 'ri-lightbulb-line',
    activities: ['Critical thinking exercises', 'Concept development', 'Ideation workshops', 'Challenge definition'],
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'Develop concepts and prototype solutions. Ideas take shape through structured design processes.',
    icon: 'ri-pencil-ruler-2-line',
    activities: ['Wireframing & sketching', 'Prototyping', 'Visual design', 'User testing'],
  },
  {
    number: '04',
    title: 'CREATE',
    description: 'Build creative outputs. Bring designs to life through production, coding and making — real, shareable and impactful work.',
    icon: 'ri-tools-line',
    activities: ['Production & building', 'Coding & technical execution', 'Content creation', 'Quality assurance'],
  },
  {
    number: '05',
    title: 'SHARE',
    description: 'Communicate your ideas to the world. Present, publish and showcase your work to build your creative presence.',
    icon: 'ri-share-line',
    activities: ['Presentation skills', 'Portfolio building', 'Publishing & distribution', 'Community engagement'],
  },
];

export default function LearningExperience() {
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
            <span className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-6 block">The Learning Experience</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              From{" "}
              <span className="text-accent-400">discovery</span>
              <br />
              to{" "}
              <span className="text-accent-400">creation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Every programme follows a structured creative journey. You don&apos;t just learn — you build, iterate and create real outputs.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="py-16 md:py-20 bg-background-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-lg bg-white border border-background-200 p-8 md:p-10">
              <div className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-6" style={{ fontFamily: 'var(--font-label)' }}>
                Our Delivery Model
              </div>
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                {deliveryModel.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 md:gap-4">
                    <span className="px-5 py-3 bg-primary-500 text-white rounded-lg text-sm font-semibold whitespace-nowrap">
                      {step}
                    </span>
                    {index < deliveryModel.length - 1 && (
                      <i className="ri-arrow-right-line text-accent-500"></i>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stages */}
      <section className="py-24 md:py-32 bg-background-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative">
            <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-[2px] bg-accent-500/20" />

            <div className="space-y-16 lg:space-y-24">
              {stages.map((stage, index) => (
                <ScrollReveal key={stage.number} delay={index * 100}>
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    <div className="flex lg:flex-col items-center gap-4 lg:gap-0">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0 z-10">
                        <i className={`${stage.icon} text-white text-xl lg:text-2xl`}></i>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="text-accent-500 font-bold text-sm tracking-wider mb-2">{stage.number}</div>
                      <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                        {stage.title}
                      </h2>
                      <p className="text-foreground-600 text-lg leading-relaxed mb-6 max-w-2xl">
                        {stage.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {stage.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-background-200">
                            <div className="w-6 h-6 bg-accent-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <i className="ri-check-line text-accent-500 text-xs"></i>
                            </div>
                            <span className="text-sm text-foreground-700 font-medium">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 geo-grid opacity-5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to start your{" "}
              <span className="text-accent-400">journey</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              Every great creator started with a single step.
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