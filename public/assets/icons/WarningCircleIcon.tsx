export default function WarningCircleIcon({
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
        fill="currentColor"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-9a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1"
      />
    </svg>
  );
}
