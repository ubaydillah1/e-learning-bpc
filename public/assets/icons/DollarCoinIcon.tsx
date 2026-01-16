export default function DollarCoinIcon({
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
        strokeWidth={1.2}
        d="M16.084 8.027a1.45 1.45 0 0 0-1.367-.967h-1.124a1.295 1.295 0 0 0-.276 2.558l1.71.374a1.451 1.451 0 0 1-.31 2.87h-.968a1.45 1.45 0 0 1-1.367-.968m1.851-4.834V5.608m0 8.703V12.86"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M3.843 10.722a6.958 6.958 0 0 0 9.16 9.577m-5.73-10.34a6.96 6.96 0 1 0 13.92 0 6.96 6.96 0 0 0-13.92 0"
      />
    </svg>
  );
}
