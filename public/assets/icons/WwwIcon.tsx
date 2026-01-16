export default function WwwIcon({
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
        strokeWidth={1.5}
        d="M3.338 17a10 10 0 0 0 17.324 0M3.338 7a10 10 0 0 1 13.663-3.66A10 10 0 0 1 20.662 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 21.95s1.408-1.853 2.295-4.95M13 2.05S14.408 3.902 15.295 7M11 21.95S9.592 20.098 8.705 17M11 2.05S9.592 3.902 8.705 7M9 10l1.5 5 1.5-5 1.5 5 1.5-5M1 10l1.5 5L4 10l1.5 5L7 10m10 0 1.5 5 1.5-5 1.5 5 1.5-5"
      />
    </svg>
  );
}
