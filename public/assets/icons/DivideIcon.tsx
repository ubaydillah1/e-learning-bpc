export default function DivideIcon({
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
        d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 12h14M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
    </svg>
  );
}
