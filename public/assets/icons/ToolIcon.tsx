export default function ToolIcon({
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
        d="M14.414 7a1 1 0 0 1 .286-.7l.01-.01 3.76-3.76a6 6 0 0 0-7.94 7.94l-6.91 6.91a2.121 2.121 0 0 0 3 3l6.91-6.91a6 6 0 0 0 7.94-7.94L17.7 9.3a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 0 1-.286-.7"
      />
    </svg>
  );
}
