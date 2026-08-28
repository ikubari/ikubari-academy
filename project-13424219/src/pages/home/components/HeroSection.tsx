import { Link } from 'react-router-dom';
import { GeometricElement } from '@/components/base/GeometricElements';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-500">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Confident%20group%20of%20young%20Black%20African%20people%20aged%2010%20to%2030%20collaborating%20inside%20a%20bright%20modern%20creative%20studio%20with%20bold%20geometric%20architecture%2C%20building%20physical%20models%20and%20working%20at%20digital%20screens%2C%20deep%20navy%20walls%20accented%20with%20coral%20and%20golden%20yellow%20light%2C%20structured%20futuristic%20creative%20lab%20atmosphere%2C%20warm%20natural%20lighting%2C%20premium%20editorial%20photography%2C%20high%20detail&width=1920&height=1080&seq=hero-creative-lab&orientation=landscape&nocache=true"
          alt="Young Black African people building and creating together at Ikubari Academy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 via-primary-500/75 to-primary-500/50" />
      </div>

      {/* Geometric Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="geo-grid opacity-10 absolute inset-0" />
        <div className="absolute top-[15%] left-[8%] w-12 h-12 border-2 border-accent-500/20 rotate-45 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[25%] right-[10%] w-16 h-16 border border-accent-500/15 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[15%] w-8 h-8 bg-accent-500/10 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[50%] right-[5%] w-20 h-[1px] bg-accent-500/20 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-[20%] right-[20%] w-6 h-6 border border-accent-500/20 rotate-45 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span
              className="inline-block px-4 py-2 border border-accent-500/40 text-accent-400 rounded-full text-sm font-medium tracking-wider uppercase backdrop-blur-sm"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              IKUBARI ACADEMY
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight animate-fade-in-up"
            style={{ fontFamily: 'var(--font-heading)', animationDelay: '0.4s' }}
          >
            BUILDING THE
            <br />
            <span className="text-accent-400">NEXT GENERATION.</span>
          </h1>

          {/* Supporting Copy */}
          <p
            className="text-lg md:text-xl text-white/70 mb-4 leading-relaxed max-w-2xl animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Ikubari Academy equips young people with the skills and mindset to thrive in a changing world.
          </p>
          <p
            className="text-base text-accent-400 font-medium tracking-wide mb-12 animate-fade-in-up"
            style={{ fontFamily: 'var(--font-label)', animationDelay: '0.7s' }}
          >
            Where purpose meets preparation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white rounded-lg text-base font-semibold hover:bg-accent-600 transition-all duration-200 whitespace-nowrap cursor-pointer"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Explore Programmes
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white rounded-lg text-base font-semibold hover:bg-white/10 transition-all duration-200 whitespace-nowrap cursor-pointer"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Join Ikubari
            </Link>
            <Link
              to="/partner"
              className="inline-flex items-center justify-center px-8 py-4 text-white/70 text-base font-medium hover:text-white transition-all duration-200 whitespace-nowrap cursor-pointer"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Partner with Ikubari
            </Link>
          </div>

          {/* Verified Stats */}
          <div className="mt-16 flex flex-wrap gap-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                <i className="ri-layout-grid-line text-accent-400 text-lg"></i>
              </div>
              <div>
                <div className="text-white font-bold text-lg">3</div>
                <div className="text-white/50 text-xs uppercase tracking-wider">Development Tracks</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                <i className="ri-book-open-line text-accent-400 text-lg"></i>
              </div>
              <div>
                <div className="text-white font-bold text-lg">6</div>
                <div className="text-white/50 text-xs uppercase tracking-wider">Core Skill Tracks</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                <i className="ri-stack-line text-accent-400 text-lg"></i>
              </div>
              <div>
                <div className="text-white font-bold text-lg">3</div>
                <div className="text-white/50 text-xs uppercase tracking-wider">Development Pillars</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side geometric composition */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
          <div className="relative w-72 h-96">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-500/10 rounded-lg animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute top-12 right-12 w-32 h-32 border-2 border-accent-500/20 rotate-45 animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-24 right-24 w-20 h-20 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-0 right-8 w-40 h-40 border border-white/10 rotate-12 animate-float" style={{ animationDelay: '0.5s' }} />
            <GeometricElement
              variant="cross"
              size={30}
              color="oklch(var(--accent-500))"
              opacity={0.2}
              animated
              className="absolute bottom-8 left-0"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <span className="text-white/40 text-xs uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}