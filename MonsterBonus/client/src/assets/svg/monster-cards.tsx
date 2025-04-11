export const MonsterCards = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="8" fill="url(#cards-gradient)" />
      <rect x="8" y="8" width="20" height="28" rx="2" fill="white" />
      <path
        d="M14 15L18 19M18 15L14 19"
        stroke="#FF7B25"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 25L26 29M26 25L22 29"
        stroke="#FF7B25"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 32L24 32"
        stroke="#FF7B25"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="12" y="4" width="20" height="28" rx="2" fill="white" />
      <path
        d="M18 11L22 15M22 11L18 15"
        stroke="#6A11CB"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 21L22 25M22 21L18 25"
        stroke="#6A11CB"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 28L28 28"
        stroke="#6A11CB"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="cards-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7B25" />
          <stop offset="1" stopColor="#FFA447" />
        </linearGradient>
      </defs>
    </svg>
  );
};
