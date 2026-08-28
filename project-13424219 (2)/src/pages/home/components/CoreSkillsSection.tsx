import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/base/GeometricElements';
import { skillTracks } from '@/content/academy';

export default function CoreSkillsSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <span className="text-accent-500 text-sm font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'var(--font-label)' }}>
              Core Skill Tracks
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Six ways to build the mind.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-foreground-600 leading-relaxed">
              Every learner develops through six core skill tracks, each with a clear focus, a set of practical skills, and a tangible outcome.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillTracks.map((skill, index) => (
            <ScrollReveal key={skill.number} delay={index * 80}>
              <div className="group h-full flex flex-col p-8 rounded-lg bg-background-50 border border-background-200 hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-accent-500/10 rounded-lg flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                    <i className={`${skill.icon} text-2xl text-accent-500`}></i>
                  </div>
                  <span className="text-4xl font-bold text-primary-500/10" style={{ fontFamily: 'var(--font-heading)' }}>
                    {skill.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-primary-500 mb-4 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                  {skill.title}
                </h3>

                <div className="mb-4">
                  <div className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-1.5">Focus</div>
                  <p className="text-sm text-foreground-600 leading-relaxed">{skill.focus}</p>
                </div>

                <div className="mb-4 flex-1">
                  <div className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-1.5">Core Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {skill.coreSkills.map((s) => (
                      <span key={s} className="px-2.5 py-1 bg-white border border-background-200 rounded-full text-xs text-foreground-600">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-1.5">Outcome</div>
                  <p className="text-sm text-foreground-600 leading-relaxed">{skill.outcome}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-14 text-center">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-lg text-base font-semibold hover:bg-primary-600 transition-all duration-200 whitespace-nowrap cursor-pointer"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Explore the Skill Tracks
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}