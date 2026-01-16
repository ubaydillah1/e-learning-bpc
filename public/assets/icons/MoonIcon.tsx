export default function MoonIcon({
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
        d="M19.158 17.467A9 9 0 0 0 21 12.79 7 7 0 0 1 11.21 3a9 9 0 1 0 7.948 14.467"
      />
    </svg>
  );
}
