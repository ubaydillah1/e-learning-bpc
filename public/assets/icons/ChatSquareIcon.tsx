export default function ChatSquareIcon({
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
        d="M20.414 16.414A2 2 0 0 0 21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 1.414-.586"
      />
    </svg>
  );
}
