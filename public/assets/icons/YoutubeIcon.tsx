export default function YoutubeIcon({
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
        d="M21.839 5.16c.34.35.582.785.701 1.26.317 1.759.471 3.543.46 5.33a29 29 0 0 1-.46 5.25 2.78 2.78 0 0 1-1.94 2c-1.72.46-8.6.46-8.6.46s-6.88 0-8.6-.46a2.78 2.78 0 0 1-1.94-1.92A29 29 0 0 1 1 11.75a29 29 0 0 1 .46-5.29 2.78 2.78 0 0 1 1.94-2C5.12 4 12 4 12 4s6.88 0 8.6.42c.47.133.898.388 1.239.74"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15.5 11.75-5.75 3.27V8.48z"
      />
    </svg>
  );
}
