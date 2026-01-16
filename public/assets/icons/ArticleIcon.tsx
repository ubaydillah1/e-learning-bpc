export default function ArticleIcon({
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
        d="M7 17h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7zM5 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.588-1.412A1.93 1.93 0 0 1 5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413A1.92 1.92 0 0 1 19 21zm0-2h14V5H5z"
      />
    </svg>
  );
}
