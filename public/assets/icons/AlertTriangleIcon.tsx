export default function AlertTriangleIcon({
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
        d="m1.82 18 8.47-14.14a2 2 0 0 1 3.42 0L22.18 18a1.998 1.998 0 0 1-1.71 3H3.53a2 2 0 0 1-1.71-3M12 9v4M12 17h.01"
      />
    </svg>
  );
}
