export default function DisabillityIcon({
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
        strokeWidth={1.5}
        d="m11.5 10-2-1L7 12m8.5 7.483A6.07 6.07 0 0 1 10.57 22c-3.353 0-6.07-2.705-6.07-6.042 0-.875.164-1.707.5-2.458M12.65 8l-.754 1.846c-.766 1.879-1.149 2.818-.713 3.486s1.432.668 3.424.668c.694 0 1.364-.18 1.75.496L19.5 20M14 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
      />
    </svg>
  );
}
