export default function BellIcon({
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
        d="M16.243 3.757A6 6 0 0 1 18 8c0 7 3 9 3 9H3s3-2 3-9a6 6 0 0 1 10.243-4.243M13.73 21a2 2 0 0 1-3.46 0"
      />
    </svg>
  );
}
