export default function TagIcon({
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
        d="m13.42 20.58 7.17-7.17a2 2 0 0 0 0-2.82L12 2H2v10l8.59 8.58a2 2 0 0 0 2.83 0M7 7h.01"
      />
    </svg>
  );
}
