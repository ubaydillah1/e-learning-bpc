export default function ShirtIcon({
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
        fill="currentColor"
        fillRule="evenodd"
        d="M15 3a6 6 0 0 1 6 6v2a1 1 0 0 1-1 1h-2v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7H4a1 1 0 0 1-1-1V9a6 6 0 0 1 6-6zm0 2H9a3 3 0 0 0 5.995.176z"
        clipRule="evenodd"
      />
    </svg>
  );
}
