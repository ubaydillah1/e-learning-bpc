export default function SortIcon({
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
      viewBox="0 0 21 21"
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10.5 12.5 4 4.107 4-4.107m-8-4-4-4m0 0-4 3.997m4-3.997v12m8-12v12"
      />
    </svg>
  );
}
