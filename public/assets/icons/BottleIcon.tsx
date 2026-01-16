export default function BottleIcon({
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
        d="M10 5h4V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 4c0 1.765.507 3.487 1.45 4.926l.05.076a9.3 9.3 0 0 1 1.5 5.096v6.73a2.27 2.27 0 0 1-.586 1.536A1.92 1.92 0 0 1 15 23H9c-.53 0-1.04-.229-1.414-.636A2.27 2.27 0 0 1 7 20.829v-6.732c0-1.826.524-3.607 1.5-5.095l.05-.076A9 9 0 0 0 10 4"
      />
    </svg>
  );
}
