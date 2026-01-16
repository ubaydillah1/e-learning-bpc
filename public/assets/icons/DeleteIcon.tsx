export default function DeleteIcon({
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
        d="M8 4h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8l-7-8zM18 9l-6 6M12 9l6 6"
      />
    </svg>
  );
}
