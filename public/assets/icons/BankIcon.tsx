export default function BankIcon({
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
        d="M11.996 7h.009M4 10v8.5M8 10v8.5m8-8.5v8.5m4-8.5v8.5M2 8.57c0-1.197.482-1.93 1.48-2.486l4.11-2.287C9.743 2.6 10.82 2 12 2s2.257.6 4.41 1.797l4.11 2.287C21.517 6.64 22 7.373 22 8.57c0 .324 0 .487-.035.62-.186.7-.821.811-1.434.811H3.469c-.613 0-1.247-.11-1.434-.811C2 9.056 2 8.894 2 8.57m17 9.93H5a3 3 0 0 0-3 3 .5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5 3 3 0 0 0-3-3"
      />
    </svg>
  );
}
