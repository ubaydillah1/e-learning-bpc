export default function ChartDownIcon({
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
        d="M9.676 16a1 1 0 0 1-1.001 1H4A1 1 0 0 1 3 16v-4.667a1 1 0 0 1 1.001-1 1 1 0 0 1 1.002 1v2.253l6.302-6.294a1 1 0 0 1 1.415 0l3.298 3.294 3.298-3.294A1.002 1.002 0 0 1 21 8.007a1 1 0 0 1-.269.699l-4.005 4a1 1 0 0 1-1.416 0l-3.298-3.293L6.418 15h2.257a1 1 0 0 1 1 1"
      />
    </svg>
  );
}
