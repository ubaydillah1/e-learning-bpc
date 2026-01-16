export default function XOctagonIcon({
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
        d="M16.14 2H7.86L2 7.86v8.28L7.86 22h8.28L22 16.14V7.86zM15 9l-6 6M9 9l6 6"
      />
    </svg>
  );
}
