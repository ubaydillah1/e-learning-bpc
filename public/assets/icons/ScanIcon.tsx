export default function ScanIcon({
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 3.75H3.75V9M15 3.75h5.25V9M15 20.25h5.25V15M9 20.25H3.75V15M3 12h18"
      />
    </svg>
  );
}
