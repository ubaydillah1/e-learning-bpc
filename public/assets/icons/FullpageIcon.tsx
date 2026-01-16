export default function FullpageIcon({
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
        fillRule="evenodd"
        d="M17.927 4.8h-2.6V3H21v5.674h-1.8V6.073l-4.763 4.764-1.274-1.274zM4.8 17.927l4.763-4.764 1.274 1.274L6.073 19.2h2.6V21H3v-5.674h1.8z"
        clipRule="evenodd"
      />
    </svg>
  );
}
