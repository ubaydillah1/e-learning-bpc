export default function CupIcon({
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
        d="M17.227 21.228c-.973 1.03-9.254 1.03-10.227 0S3.027 3.731 4 2.702c.973-1.03 14.98-.838 15.793 0 .814.837-1.593 17.497-2.566 18.526Z"
      />
    </svg>
  );
}
