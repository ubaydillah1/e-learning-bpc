export default function FeatherIcon({
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
        d="M21.998 7.995c0 1.592-.632 3.119-1.758 4.244L13.5 19H5v-8.5l6.75-6.75a6.003 6.003 0 0 1 10.248 4.246M16 8 2 22M17.5 15H9"
      />
    </svg>
  );
}
