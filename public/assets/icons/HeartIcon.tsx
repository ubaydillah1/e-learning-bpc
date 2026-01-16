export default function HeartIcon({
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
        d="M19.055 3.417a5.5 5.5 0 0 1 1.785 8.973l-1.06 1.06L12 21.23l-7.78-7.78-1.06-1.06a5.501 5.501 0 0 1 7.78-7.78L12 5.67l1.06-1.06a5.5 5.5 0 0 1 5.995-1.193"
      />
    </svg>
  );
}
