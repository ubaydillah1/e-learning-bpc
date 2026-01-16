export default function MicIcon({
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
        d="M9.879 1.879A3 3 0 0 1 15 4v8a3 3 0 0 1-6 0V4a3 3 0 0 1 .879-2.121"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 10v2a7 7 0 1 1-14 0v-2M12 19v4M8 23h8"
      />
    </svg>
  );
}
