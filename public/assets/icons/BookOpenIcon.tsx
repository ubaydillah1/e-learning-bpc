export default function BookOpenIcon({
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
        d="M8 3H2v15h7a3 3 0 0 1 3 3V7a4 4 0 0 0-4-4M16 3h6v15h-7a3 3 0 0 0-3 3V7a4 4 0 0 1 4-4"
      />
    </svg>
  );
}
