export default function Edit2Icon({
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
        d="M17.918 2.387c-.344.142-.655.35-.918.613L3.5 16.5 2 22l5.5-1.5L21 7a2.828 2.828 0 0 0-3.082-4.613"
      />
    </svg>
  );
}
