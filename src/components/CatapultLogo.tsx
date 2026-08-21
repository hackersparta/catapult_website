interface CatapultLogoProps {
  showText?: boolean;
  className?: string;
}

export function CatapultLogo({ showText = true, className = '' }: CatapultLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Pristine Vector Catapult Graphic */}
      <svg
        viewBox="0 0 110 100"
        className="w-10 h-10 text-brand-primary shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Trajectory Parabolic Dotted Arc */}
        <path
          d="M 18,22 Q 52,-14 88,15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2.5 3.5"
          className="opacity-60"
        />

        {/* Projectile (Stone Capsule in Flight) */}
        <path
          d="M 88,15 C 92,10 99,10 102,15 C 105,20 102,27 96,27 C 90,27 86,20 88,15 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        {/* Main Diagonal Throwing Arm */}
        <line x1="68" y1="80" x2="16" y2="24" stroke="currentColor" strokeWidth="3" />

        {/* Arm Basket Cup (Precision Curved) */}
        <path d="M 6,24 C 6,14 18,14 22,20" stroke="currentColor" strokeWidth="2.5" />

        {/* Diagonal support frame forming the apex */}
        <path d="M 25,80 L 52,52 L 85,80" stroke="currentColor" strokeWidth="2.5" />
        
        {/* Core Vertical Pivot Post */}
        <line x1="52" y1="80" x2="52" y2="42" stroke="currentColor" strokeWidth="2.5" />

        {/* Bottom Horizontal Connecting Chassis */}
        <rect x="25" y="77" width="60" height="6" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />

        {/* Left Wheel with inner hub */}
        <circle cx="25" cy="80" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="25" cy="80" r="2.5" fill="currentColor" />

        {/* Right Wheel with inner hub */}
        <circle cx="85" cy="80" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="85" cy="80" r="2.5" fill="currentColor" />
      </svg>

      {/* Brand Typography adaptation from original image */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-sans text-base font-semibold tracking-[4px] text-zinc-100 uppercase leading-none">
            CATAPULT<span className="text-brand-primary">AI</span>
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[1.5px] text-zinc-500 mt-1 leading-none font-medium">
            AI Automation Consultancy
          </span>
        </div>
      )}
    </div>
  );
}
