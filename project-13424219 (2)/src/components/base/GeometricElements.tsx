import { useEffect, useRef } from 'react';

interface GeometricProps {
  variant?: 'square' | 'circle' | 'triangle' | 'line' | 'cross' | 'grid' | 'dot';
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
  rotation?: number;
  opacity?: number;
}

export function GeometricElement({
  variant = 'square',
  size = 40,
  color = 'currentColor',
  className = '',
  animated = false,
  rotation = 0,
  opacity = 1,
}: GeometricProps) {
  const baseStyle: React.CSSProperties = {
    width: size,
    height: size,
    color,
    opacity,
    transform: `rotate(${rotation}deg)`,
  };

  if (variant === 'square') {
    return (
      <div
        className={`bg-current ${animated ? 'animate-float' : ''} ${className}`}
        style={baseStyle}
      />
    );
  }

  if (variant === 'circle') {
    return (
      <div
        className={`bg-current rounded-full ${animated ? 'animate-pulse-subtle' : ''} ${className}`}
        style={baseStyle}
      />
    );
  }

  if (variant === 'triangle') {
    return (
      <div
        className={`${animated ? 'animate-float' : ''} ${className}`}
        style={{
          ...baseStyle,
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size * 0.866}px solid currentColor`,
        }}
      />
    );
  }

  if (variant === 'line') {
    return (
      <div
        className={`bg-current ${animated ? 'animate-draw-line' : ''} ${className}`}
        style={{
          ...baseStyle,
          height: 2,
          width: size,
        }}
      />
    );
  }

  if (variant === 'cross') {
    return (
      <div className={`relative ${animated ? 'animate-rotate-slow' : ''} ${className}`} style={baseStyle}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-full h-[2px] bg-current" />
          <div className="absolute h-full w-[2px] bg-current" />
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div
        className={`geo-grid ${className}`}
        style={{
          width: size,
          height: size,
          opacity,
        }}
      />
    );
  }

  if (variant === 'dot') {
    return (
      <div
        className={`bg-current rounded-full ${animated ? 'animate-pulse-subtle' : ''} ${className}`}
        style={{
          width: size,
          height: size,
          opacity,
        }}
      />
    );
  }

  return null;
}

interface GeometricClusterProps {
  className?: string;
  children?: React.ReactNode;
}

export function GeometricCluster({ className = '', children }: GeometricClusterProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}

export function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 geo-grid opacity-30" />

      {/* Floating geometric shapes */}
      <div className="absolute top-[10%] left-[5%] w-16 h-16 bg-primary-500/10 rotate-45 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-[20%] right-[8%] w-24 h-24 bg-accent-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[40%] left-[15%] w-8 h-8 bg-primary-500/15 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[30%] right-[12%] w-20 h-20 bg-accent-500/10 rotate-45 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-[15%] left-[8%] w-12 h-12 bg-primary-500/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[60%] right-[20%] w-6 h-6 bg-accent-500/15 rotate-30 animate-float" style={{ animationDelay: '3s' }} />

      {/* Horizontal lines */}
      <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-primary-500/5" />
      <div className="absolute top-[50%] left-0 right-0 h-[1px] bg-primary-500/5" />
      <div className="absolute top-[75%] left-0 right-0 h-[1px] bg-primary-500/5" />
    </div>
  );
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transformClass = direction === 'up' ? 'translate-y-6' : direction === 'down' ? '-translate-y-6' : direction === 'left' ? 'translate-x-6' : '-translate-x-6';

  return (
    <div
      ref={ref}
      className={`reveal ${transformClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}