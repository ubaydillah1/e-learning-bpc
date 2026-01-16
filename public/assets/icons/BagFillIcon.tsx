export default function BagFillIcon({
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
        d="M6.24 22.266h11.822c1.808 0 2.853-1.045 2.853-3.114V8.755c0-2.07-1.055-3.114-3.155-3.114h-1.597c-.06-2.11-1.888-3.908-4.158-3.908-2.28 0-4.108 1.798-4.169 3.908H6.24c-2.09 0-3.154 1.034-3.154 3.114v10.396c0 2.079 1.065 3.113 3.154 3.113m5.765-19.004c1.416 0 2.491 1.065 2.541 2.381H9.465c.04-1.316 1.115-2.38 2.541-2.38"
      />
    </svg>
  );
}
