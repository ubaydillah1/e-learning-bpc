export default function CardIcon({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 9.714h21M5.667 15.43h.011m4.655 0h2.334M1 7.429c0-.91.369-1.782 1.025-2.425A3.54 3.54 0 0 1 4.5 4h14c.928 0 1.819.361 2.475 1.004A3.4 3.4 0 0 1 22 7.43v9.142c0 .91-.369 1.782-1.025 2.425A3.54 3.54 0 0 1 18.5 20h-14a3.54 3.54 0 0 1-2.475-1.004A3.4 3.4 0 0 1 1 16.57z"
      />
    </svg>
  );
}
