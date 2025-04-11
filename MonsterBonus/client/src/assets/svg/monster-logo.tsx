export const MonsterLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="20" fill="url(#gradient)" />
      <path
        d="M15.5 14C16.8807 14 18 12.8807 18 11.5C18 10.1193 16.8807 9 15.5 9C14.1193 9 13 10.1193 13 11.5C13 12.8807 14.1193 14 15.5 14Z"
        fill="white"
      />
      <path
        d="M15.5 13C16.3284 13 17 12.3284 17 11.5C17 10.6716 16.3284 10 15.5 10C14.6716 10 14 10.6716 14 11.5C14 12.3284 14.6716 13 15.5 13Z"
        fill="black"
      />
      <path
        d="M24.5 14C25.8807 14 27 12.8807 27 11.5C27 10.1193 25.8807 9 24.5 9C23.1193 9 22 10.1193 22 11.5C22 12.8807 23.1193 14 24.5 14Z"
        fill="white"
      />
      <path
        d="M24.5 13C25.3284 13 26 12.3284 26 11.5C26 10.6716 25.3284 10 24.5 10C23.6716 10 23 10.6716 23 11.5C23 12.3284 23.6716 13 24.5 13Z"
        fill="black"
      />
      <path
        d="M20 30C24.9706 30 29 25.9706 29 21C29 16.0294 24.9706 12 20 12C15.0294 12 11 16.0294 11 21C11 25.9706 15.0294 30 20 30Z"
        fill="url(#gradient)"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M16 23C17.1046 23 18 22.1046 18 21C18 19.8954 17.1046 19 16 19C14.8954 19 14 19.8954 14 21C14 22.1046 14.8954 23 16 23Z"
        fill="white"
      />
      <path
        d="M24 23C25.1046 23 26 22.1046 26 21C26 19.8954 25.1046 19 24 19C22.8954 19 22 19.8954 22 21C22 22.1046 22.8954 23 24 23Z"
        fill="white"
      />
      <path
        d="M20 27C21.6569 27 23 25.6569 23 24C23 22.3431 21.6569 21 20 21C18.3431 21 17 22.3431 17 24C17 25.6569 18.3431 27 20 27Z"
        fill="white"
      />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6A11CB" />
          <stop offset="1" stopColor="#2575FC" />
        </linearGradient>
      </defs>
    </svg>
  );
};
