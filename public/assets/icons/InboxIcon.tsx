export default function InboxIcon({
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
        d="M22 12h-6l-2 3h-4l-2-3H2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m2 12 3.45-6.89A2 2 0 0 1 7.24 4h9.52a2 2 0 0 1 1.79 1.11L22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
      />
    </svg>
  );
}
