import { ScrollReveal } from '@/components/base/GeometricElements';

const audiences = [
  {
    icon: 'ri-user-smile-line',
    title: 'Young Learners',
    age: '13–16',
    description: 'Curious young people discovering their creativity and building confidence through hands-on exploration.',
  },
  {
    icon: 'ri-compass-3-line',
    title: 'Students',
    age: '17–22',
    description: 'Students exploring their interests, building practical skills and gaining direction for the future.',
  },
  {
    icon: 'ri-briefcase-line',
    title: 'Young Professionals',
    age: '23–30',
    description: 'Emerging professionals mastering in-demand skills and moving directly into employment and growth.',
  },
  {
    icon: 'ri-team-line',
    title: 'Partners & Mentors',
    age: 'Join us',
    description: 'Organisations and individuals who sponsor, host, mentor and champion the next generation.',
  },
];

export default function WhoIsItForSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'var(--font-label)' }}>
              Who is Ikubari for?
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-500 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              A place for every stage of the journey.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <ScrollReveal key={audience.title} delay={index * 100}>
              <div className="group h-full p-8 rounded-lg bg-background-50 border border-background-200 hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-accent-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors">
                  <i className={`${audience.icon} text-2xl text-accent-500`}></i>
                </div>
                <div className="text-accent-500 text-xs font-semibold tracking-wider uppercase mb-2" style={{ fontFamily: 'var(--font-label)' }}>
                  {audience.age}
                </div>
                <h3 className="text-lg font-bold text-primary-500 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {audience.title}
                </h3>
                <p className="text-foreground-600 text-sm leading-relaxed">{audience.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}