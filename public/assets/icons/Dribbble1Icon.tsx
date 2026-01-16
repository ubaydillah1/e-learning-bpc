export default function Dribbble1Icon({
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
        strokeWidth={0.6}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.6}
        d="M22 13.264A15.5 15.5 0 0 0 19.147 13C13.795 13 9.034 15.742 6 20M19 5c-3.13 3.667-7.832 6-13.09 6-1.346 0-2.655-.153-3.91-.441"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.6}
        d="M14.618 22c.254-1.237.382-2.497.382-3.76C15 11.926 11.834 6.347 7 3"
      />
    </svg>
  );
}
