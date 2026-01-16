export default function CoffeeIcon({
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
        d="M18 8h1a4 4 0 1 1 0 8h-1M18 8H2v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4zM6 1v3M10 1v3M14 1v3"
      />
    </svg>
  );
}
