export default function HourglassIcon({
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
        d="M4 3h16M5.5 3v2.03A4 4 0 0 0 7.061 8.2L12 12m0 0 4.939-3.8A4 4 0 0 0 18.5 5.03V3M12 12l-4.939 3.8A4 4 0 0 0 5.5 18.97V21m6.5-9 4.939 3.8a4 4 0 0 1 1.561 3.17V21M4 21h16"
      />
    </svg>
  );
}
