export default function ChartUpIcon({
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
        d="M14.324 8a1 1 0 0 1 1.002-1h4.673A1 1 0 0 1 21 8v4.667a1 1 0 0 1-1.001 1 1 1 0 0 1-1.002-1v-2.253l-6.302 6.294a1 1 0 0 1-1.415 0l-3.298-3.294-3.298 3.294A1.002 1.002 0 0 1 3 15.994a1 1 0 0 1 .269-.7l4.005-4a1 1 0 0 1 1.416 0l3.298 3.293L17.582 9h-2.257a1 1 0 0 1-1-1"
      />
    </svg>
  );
}
