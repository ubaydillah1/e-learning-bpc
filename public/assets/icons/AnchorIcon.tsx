export default function AnchorIcon({
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
        d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6M12 22V8M5 12H2a10 10 0 0 0 20 0h-3"
      />
    </svg>
  );
}
