import { Link } from 'react-router-dom';
import { GeometricElement } from '../base/GeometricElements';

export default function Footer() {
  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Programmes', href: '/programs' },
    { name: 'Skills', href: '/skills' },
    { name: 'Learning Experience', href: '/learning-experience' },
    { name: 'Partners', href: '/partner' },
  ];

  const trackLinks = [
    { name: 'Summer Development Track (13–16)', href: '/programs' },
    { name: 'Youth Development Track (17–22)', href: '/programs' },
    { name: 'Young Professionals Track (23–30)', href: '/programs' },
  ];

  return (
    <footer className="bg-primary-500 relative overflow-hidden">
      {/* Geometric decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-8 left-8 opacity-5">
          <GeometricElement variant="square" size={60} color="oklch(var(--accent-500))" />
        </div>
        <div className="absolute top-20 right-12 opacity-5">
          <GeometricElement variant="circle" size={40} color="oklch(var(--accent-500))" />
        </div>
        <div className="absolute bottom-16 left-20 opacity-5">
          <GeometricElement variant="triangle" size={30} color="oklch(var(--accent-500))" />
        </div>
        <div className="absolute bottom-8 right-24 opacity-5">
          <GeometricElement variant="cross" size={24} color="oklch(var(--accent-500))" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white flex items-center justify-center font-bold text-lg rounded-lg text-primary-500" style={{ fontFamily: 'var(--font-heading)' }}>
                I
              </div>
              <div>
                <h3 className="font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  IKUBARI ACADEMY
                </h3>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/60">
                  Building the Next Generation
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Ikubari Academy equips young people aged 10–30 with the skills and mindset to thrive in a changing world — through hands-on training in media and technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase" style={{ fontFamily: 'var(--font-label)' }}>
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 text-sm hover:text-accent-400 transition-colors cursor-pointer">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Development Tracks */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase" style={{ fontFamily: 'var(--font-label)' }}>
              Development Tracks
            </h4>
            <ul className="space-y-3">
              {trackLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 text-sm hover:text-accent-400 transition-colors cursor-pointer">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase" style={{ fontFamily: 'var(--font-label)' }}>
              Get in Touch
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Whether you are a learner or a partner, there is a place for you in the Ikubari story.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@ikubariacademy.com"
                className="inline-flex items-center gap-2 text-accent-400 text-sm font-medium hover:text-white transition-colors cursor-pointer"
              >
                <i className="ri-mail-line text-base"></i>
                <span className="whitespace-nowrap">hello@ikubariacademy.com</span>
              </a>
              <div className="inline-flex items-center gap-2 text-white/60 text-sm">
                <i className="ri-map-pin-line text-base"></i>
                <span>Lagos, Nigeria</span>
              </div>
              <Link
                to="/contact"
                className="inline-block w-full text-center px-5 py-2.5 bg-white text-primary-500 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors cursor-pointer whitespace-nowrap"
              >
                Join Ikubari
              </Link>
              <Link
                to="/partner"
                className="inline-block w-full text-center px-5 py-2.5 bg-white/10 rounded-lg text-sm text-white font-medium hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
              >
                Partner with Ikubari
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Ikubari Academy. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Creativity is Architecture.
          </p>
        </div>
      </div>
    </footer>
  );
}