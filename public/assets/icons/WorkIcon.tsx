export default function WorkIcon({
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
        d="M4 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 19V8q0-.824.588-1.412A1.93 1.93 0 0 1 4 6h4V4q0-.824.588-1.412A1.93 1.93 0 0 1 10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413A1.92 1.92 0 0 1 20 21zm0-2h16V8H4zm6-13h4V4h-4z"
      />
    </svg>
  );
}
