export const MonsterDice = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="8" fill="url(#dice-gradient)" />
      <circle cx="10" cy="10" r="3" fill="white" />
      <circle cx="20" cy="20" r="3" fill="white" />
      <circle cx="30" cy="30" r="3" fill="white" />
      <circle cx="10" cy="30" r="3" fill="white" />
      <circle cx="30" cy="10" r="3" fill="white" />
      <path
        d="M28 25C29.6569 25 31 23.6569 31 22C31 20.3431 29.6569 19 28 19C26.3431 19 25 20.3431 25 22C25 23.6569 26.3431 25 28 25Z"
        fill="white"
      />
      <path
        d="M28 24C29.1046 24 30 23.1046 30 22C30 20.8954 29.1046 20 28 20C26.8954 20 26 20.8954 26 22C26 23.1046 26.8954 24 28 24Z"
        fill="black"
      />
      <path
        d="M12 25C13.6569 25 15 23.6569 15 22C15 20.3431 13.6569 19 12 19C10.3431 19 9 20.3431 9 22C9 23.6569 10.3431 25 12 25Z"
        fill="white"
      />
      <path
        d="M12 24C13.1046 24 14 23.1046 14 22C14 20.8954 13.1046 20 12 20C10.8954 20 10 20.8954 10 22C10 23.1046 10.8954 24 12 24Z"
        fill="black"
      />
      <defs>
        <linearGradient id="dice-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6A11CB" />
          <stop offset="1" stopColor="#2575FC" />
        </linearGradient>
      </defs>
    </svg>
  );
};
