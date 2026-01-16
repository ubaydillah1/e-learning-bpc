export default function InOutIcon({
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
        d="M14.25 1.5a.75.75 0 1 0 0 1.5H18a1.5 1.5 0 0 1 1.5 1.5V18a1.5 1.5 0 0 1-1.5 1.5h-3.75a.75.75 0 1 0 0 1.5H18c1.65 0 3-1.343 3-3V4.5c0-1.65-1.343-3-3-3z"
      />
      <path
        fill="currentColor"
        d="M10.275 6.225a.75.75 0 0 0-1.06 1.06l3.224 3.226H2.254a.75.75 0 1 0 0 1.5H12.44l-3.225 3.225a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5z"
      />
    </svg>
  );
}
