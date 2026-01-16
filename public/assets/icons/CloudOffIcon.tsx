export default function CloudOffIcon({
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
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        clipPath="url(#prefix__a)"
      >
        <path d="M22.607 16.871a4.97 4.97 0 0 0-4.582-6.908h-1.253A7.95 7.95 0 0 0 9.765 4m-4.661.994a7.951 7.951 0 0 0 3.975 14.909h8.946c.576-.001 1.148-.102 1.69-.299M1 1l22 22" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
