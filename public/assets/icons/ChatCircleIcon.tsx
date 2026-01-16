export default function ChatCircleIcon({
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
        d="M20.1 15.3a8.4 8.4 0 0 0 .9-3.8V11a8.48 8.48 0 0 0-8-8h-.5a8.4 8.4 0 0 0-3.8.9A8.5 8.5 0 0 0 4 11.5a8.4 8.4 0 0 0 .9 3.8L3 21l5.7-1.9a8.4 8.4 0 0 0 3.8.9 8.5 8.5 0 0 0 7.6-4.7"
      />
    </svg>
  );
}
