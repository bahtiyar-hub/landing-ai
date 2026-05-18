type IconProps = { className?: string };

export function IconLand({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M3 20h18M5 20V10l7-6 7 6v10M9 20v-5h6v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBuilding({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 20V6l8-4 8 4v14M8 20v-6h8v6M10 10h1M13 10h1M10 14h1M13 14h1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBed({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M3 14V9a2 2 0 012-2h2a2 2 0 012 2v1h4V9a2 2 0 012-2h2a2 2 0 012 2v5M3 14v3h18v-3M3 14h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBath({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M5 12h14a2 2 0 012 2v2a3 3 0 01-3 3H6a3 3 0 01-3-3v-2a2 2 0 012-2zM7 12V7a2 2 0 012-2h1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 20h12" strokeLinecap="round" />
    </svg>
  );
}

export function IconCar({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M5 17h14l-1.5-5.5a2 2 0 00-1.9-1.4H8.4a2 2 0 00-1.9 1.4L5 17zM5 17l-1 2M19 17l1 2M7 17v2M17 17v2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7.5" cy="19" r="1" />
      <circle cx="16.5" cy="19" r="1" />
    </svg>
  );
}

export function IconBolt({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCertificate({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M9 12l2 2 4-4M7 4h10v12H7V4zM9 20h6l-1 2-2-1-2 1-1-2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconShield({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSmartHome({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 3v3M5.6 7.6l2.1 2.1M3 14h3M18 14h3M16.3 9.7l2.1-2.1" strokeLinecap="round" />
      <circle cx="12" cy="14" r="4" />
      <path d="M10 14h4M12 12v4" strokeLinecap="round" />
    </svg>
  );
}

export function IconGarden({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 21V11M12 11C12 7 8 5 5 7c3-1 5 1 7 4M12 11c0-4 4-6 7-4-3-1-5 1-7 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 21h16" strokeLinecap="round" />
    </svg>
  );
}

export function IconWater({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 3c3 4 6 7 6 10a6 6 0 11-12 0c0-3 3-6 6-10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
