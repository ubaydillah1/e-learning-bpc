export default function Link2Icon({
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
        d="M15 7h3a5 5 0 1 1 0 10h-3m-6 0H6A5 5 0 1 1 6 7h3M8 12h8"
      />
    </svg>
  );
}
