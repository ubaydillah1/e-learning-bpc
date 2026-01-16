export default function GitCommitIcon({
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
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M1.05 12H7M17.01 12h5.95"
      />
    </svg>
  );
}
