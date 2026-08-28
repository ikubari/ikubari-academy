import { ScrollReveal } from '@/components/base/GeometricElements';

const directions = [
  {
    icon: 'ri-lightbulb-flash-line',
    title: 'Creative',
    description: 'A generation of creators, builders and storytellers who shape culture and industry.',
  },
  {
    icon: 'ri-code-s-slash-line',
    title: 'Tech-Savvy',
    description: 'Young people fluent in the tools and technologies of a digital, changing world.',
  },
  {
    icon: 'ri-compass-3-line',
    title: 'Purpose-Driven',
    description: 'Leaders who know their why and carry their values into everything they build.',
  },
];

export default function ImpactSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <ScrollReveal>
              <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'var(--font-label)' }}>
                The Future
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                Nurturing a generation that{" "}
                <span className="text-accent-500">shapes the future</span>.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-foreground-600 leading-relaxed">
                Our vision is a generation of creative, tech-savvy and purpose-driven young people who shape the future with innovation, confidence and impact.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            {directions.map((direction, index) => (
              <ScrollReveal key={direction.title} delay={index * 100}>
                <div className="flex gap-5 p-6 rounded-lg bg-background-50 border border-background-200 hover:border-accent-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${direction.icon} text-xl text-accent-500`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-500 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                      {direction.title}
                    </h3>
                    <p className="text-foreground-600 text-sm leading-relaxed">{direction.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}