export default function ThumbsDownIcon({
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
        d="m17 13-4 9a3 3 0 0 1-3-3v-4H4.34a2 2 0 0 1-2-2.3l1.38-9a2 2 0 0 1 2-1.7H17m0 11V2m0 11h2.67A2.31 2.31 0 0 0 22 11V4a2.31 2.31 0 0 0-2.33-2H17"
      />
    </svg>
  );
}
