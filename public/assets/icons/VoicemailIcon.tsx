export default function VoicemailIcon({
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
        d="M5.5 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M18.5 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M5.5 16h13"
      />
    </svg>
  );
}
