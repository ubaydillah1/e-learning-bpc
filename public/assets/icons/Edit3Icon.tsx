export default function Edit3Icon({
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
        d="M12 20h9M18 2.879c-.563 0-1.102.223-1.5.621L4 16l-1 4 4-1L19.5 6.5A2.12 2.12 0 0 0 18 2.88"
      />
    </svg>
  );
}
