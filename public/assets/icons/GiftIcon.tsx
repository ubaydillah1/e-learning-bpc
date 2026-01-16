export default function GiftIcon({
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
        d="M20 12v10H4V12M22 7H2v5h20zM12 22V7M7.5 7H12s-1-5-4.5-5a2.5 2.5 0 1 0 0 5M16.5 7H12s1-5 4.5-5a2.5 2.5 0 0 1 0 5"
      />
    </svg>
  );
}
