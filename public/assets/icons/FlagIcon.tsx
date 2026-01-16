export default function FlagIcon({
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
        d="M8 14c-3 0-4 1-4 1V3s1-1 4-1 5 2 8 2 4-1 4-1v12s-1 1-4 1-5-2-8-2M4 22v-7"
      />
    </svg>
  );
}
