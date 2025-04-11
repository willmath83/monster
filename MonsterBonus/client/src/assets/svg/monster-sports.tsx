export const MonsterSports = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="8" fill="url(#sports-gradient)" />
      <circle cx="20" cy="20" r="12" fill="white" stroke="#2575FC" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="20" cy="20" r="8" fill="#2575FC" />
      <path
        d="M18 17C19.6569 17 21 15.6569 21 14C21 12.3431 19.6569 11 18 11C16.3431 11 15 12.3431 15 14C15 15.6569 16.3431 17 18 17Z"
        fill="white"
      />
      <path
        d="M18 16C19.1046 16 20 15.1046 20 14C20 12.8954 19.1046 12 18 12C16.8954 12 16 12.8954 16 14C16 15.1046 16.8954 16 18 16Z"
        fill="black"
      />
      <path
        d="M24 28C25.6569 28 27 26.6569 27 25C27 23.3431 25.6569 22 24 22C22.3431 22 21 23.3431 21 25C21 26.6569 22.3431 28 24 28Z"
        fill="white"
      />
      <path
        d="M24 27C25.1046 27 26 26.1046 26 25C26 23.8954 25.1046 23 24 23C22.8954 23 22 23.8954 22 25C22 26.1046 22.8954 27 24 27Z"
        fill="black"
      />
      <defs>
        <linearGradient id="sports-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2575FC" />
          <stop offset="1" stopColor="#56B4FC" />
        </linearGradient>
      </defs>
    </svg>
  );
};
