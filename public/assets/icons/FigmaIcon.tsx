export default function FigmaIcon({
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
        d="M6.025 3.025A3.5 3.5 0 0 0 8.5 9H12V2H8.5a3.5 3.5 0 0 0-2.475 1.025M15.5 2H12v7h3.5a3.5 3.5 0 1 0 0-7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.266 11.16a3.5 3.5 0 1 0 6.467 2.68 3.5 3.5 0 0 0-6.467-2.68M6.025 17.025A3.5 3.5 0 1 0 12 19.5V16H8.5a3.5 3.5 0 0 0-2.475 1.025"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.025 10.025A3.5 3.5 0 0 0 8.5 16H12V9H8.5a3.5 3.5 0 0 0-2.475 1.025"
      />
    </svg>
  );
}
