import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Programmes', href: '/programs' },
    { name: 'Skills', href: '/skills' },
    { name: 'Learning Experience', href: '/learning-experience' },
    { name: 'Partners', href: '/partner' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : isHome
            ? 'bg-transparent'
            : 'bg-white/90 backdrop-blur-sm'
      }`}
      style={{ height: isScrolled ? '64px' : '80px' }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="group flex items-center cursor-pointer shrink-0">
            <div
              className={`relative transition-all duration-300 ${
                isScrolled ? 'h-8' : 'h-10'
              }`}
              style={{ aspectRatio: '3.5/1' }}
            >
              <img
                src="https://storage.helloreaddy.io/project_files/4c38c02b-5a65-4c2b-b977-3cd19a015a85/4dc24be9-654d-456a-a671-d15b8b8486a1_compressed_full-logo-on-white-background.webp"
                alt="Ikubari Academy"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent-500 ${
                  location.pathname === item.href
                    ? 'text-accent-500'
                    : isScrolled || !isHome
                      ? 'text-foreground-700'
                      : 'text-white/90'
                }`}
                style={{ fontFamily: 'var(--font-label)' }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                isScrolled || !isHome
                  ? 'bg-primary-500 text-white hover:bg-primary-600'
                  : 'bg-white text-primary-500 hover:bg-white/90'
              }`}
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Join Ikubari
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer transition-colors ${
              isScrolled || !isHome ? 'text-primary-500' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 border-t border-background-200">
            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-accent-500'
                      : 'text-foreground-700 hover:text-accent-500'
                  }`}
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-block w-full text-center px-6 py-3 bg-primary-500 text-white rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap"
                >
                  Join Ikubari
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}