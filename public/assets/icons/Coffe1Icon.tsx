export default function Coffe1Icon({
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
        d="M19.28 4.5h.334a.75.75 0 0 1 .74.627l.5 3a.75.75 0 0 1-.74.873h-1.156l-.915 12.804a.75.75 0 0 1-.748.696H6.699a.75.75 0 0 1-.75-.696L5.037 9H3.885a.75.75 0 0 1-.74-.873l.5-3a.75.75 0 0 1 .74-.627h.33l-.158-2.196a.75.75 0 0 1 .748-.804h13.383a.75.75 0 0 1 .749.804zm-1.504 0 .107-1.5H6.11l.106 1.5zM4.93 7.5h14.3L18.98 6H5.02l-.25 1.5zM6.539 9l.857 12h9.201l.857-12z"
      />
    </svg>
  );
}
