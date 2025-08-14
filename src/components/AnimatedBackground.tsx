import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 0%, hsl(var(--primary))/0.1 50%, transparent 100%),
              linear-gradient(0deg, transparent 0%, hsl(var(--primary))/0.1 50%, transparent 100%)
            `,
            backgroundSize: '100px 100px',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
      </div>

      {/* Moving Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      {/* Moving Lines */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          style={{
            width: `${200 + Math.random() * 300}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `slide-horizontal ${20 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      {/* Floating Geometric Shapes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`shape-${i}`}
          className="absolute opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${25 + Math.random() * 15}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 10}s`
          }}
        >
          {i % 3 === 0 && (
            <div className="w-4 h-4 border border-primary/40 rotate-45" />
          )}
          {i % 3 === 1 && (
            <div className="w-3 h-3 bg-primary/40 rounded-full" />
          )}
          {i % 3 === 2 && (
            <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-primary/40" />
          )}
        </div>
      ))}

      {/* Navigation Route Lines */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-10" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <path
          d="M0,200 Q300,100 600,300 T1200,200"
          stroke="url(#routeGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          className="animate-pulse-slow"
        />
        
        <path
          d="M0,400 Q400,200 800,500 T1600,300"
          stroke="url(#routeGradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3,7"
          className="animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
      </svg>
    </div>
  );
};

export default AnimatedBackground;