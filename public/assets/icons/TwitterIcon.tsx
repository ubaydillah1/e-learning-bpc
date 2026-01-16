export default function TwitterIcon({
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
        d="M19.86 4.53A10.9 10.9 0 0 0 23 3a7.7 7.7 0 0 1-2.08 3.67q.079.412.08.83C21 19 10 24 1 19a11.64 11.64 0 0 0 7-2C-1 13 3 4 3 4a10.66 10.66 0 0 0 9 4.53v-1a4.48 4.48 0 0 1 7.86-3"
      />
    </svg>
  );
}
