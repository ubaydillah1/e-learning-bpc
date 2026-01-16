export default function PhoneOutgoingIcon({
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
        d="M23 7V1h-6M16 8l7-7M22 19.92v-3a2 2 0 0 0-1.72-2.03 13 13 0 0 1-2.81-.7 2 2 0 0 0-2.11.45l-1.27 1.27a16 16 0 0 1-6-6l1.27-1.27a2 2 0 0 0 .45-2.11 12.8 12.8 0 0 1-.7-2.81 2 2 0 0 0-2-1.72h-3a2 2 0 0 0-1.99 2.18 19.8 19.8 0 0 0 3.07 8.67 19.5 19.5 0 0 0 6 6 19.8 19.8 0 0 0 8.63 3.07 2 2 0 0 0 2.18-2"
      />
    </svg>
  );
}
