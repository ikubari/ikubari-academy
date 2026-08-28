import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-500 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 geo-grid opacity-5 pointer-events-none" />
      <div className="absolute top-20 right-20 w-32 h-32 border border-accent-500/10 rotate-45 animate-float" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-500/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative text-center px-6">
        <div className="w-20 h-20 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-8">
          <i className="ri-error-warning-line text-5xl text-accent-500"></i>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          404
        </h1>
        <p className="text-xl text-white/60 mb-8">
          This page does not exist. It might have been moved or never built.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white rounded-lg font-semibold hover:bg-accent-600 transition-all duration-200 whitespace-nowrap cursor-pointer"
        >
          <i className="ri-arrow-left-line"></i>
          Back to Home
        </Link>
      </div>
    </div>
  );
}