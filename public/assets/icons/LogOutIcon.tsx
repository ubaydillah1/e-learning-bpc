export default function LogOutIcon({
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
        d="M15 21h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4M8 17l-5-5 5-5M3 12h12"
      />
    </svg>
  );
}
