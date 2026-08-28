import { ScrollReveal } from '@/components/base/GeometricElements';

const roles = [
  {
    icon: 'ri-presentation-line',
    title: 'Facilitators',
    description: 'Guiding hands-on sessions and practical learning across every track.',
  },
  {
    icon: 'ri-tools-line',
    title: 'Trainers',
    description: 'Industry practitioners who teach the hard skills learners need to build and create.',
  },
  {
    icon: 'ri-user-heart-line',
    title: 'Mentors',
    description: 'Trusted guides who walk alongside learners and shape character and purpose.',
  },
];

export default function FacilitatorsSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'var(--font-label)' }}>
              Facilitators & Mentors
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Guided by people who build.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <ScrollReveal key={role.title} delay={index * 120}>
              <div className="group h-full p-8 rounded-lg bg-background-50 border border-background-200 hover:border-accent-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-accent-500/10 rounded-lg flex items-center justify-center mb-6">
                  <i className={`${role.icon} text-2xl text-accent-500`}></i>
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {role.title}
                </h3>
                <p className="text-foreground-600 text-sm leading-relaxed">{role.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}