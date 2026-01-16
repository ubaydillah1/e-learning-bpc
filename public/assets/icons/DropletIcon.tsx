export default function DropletIcon({
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
        d="M17.66 8.35 12 2.69 6.35 8.35a8 8 0 1 0 11.31 0"
      />
    </svg>
  );
}
