export default function Twitter1Icon({
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
      viewBox="0 0 16 16"
      className={className}
      {...props}
    >
      <g clipPath="url(#prefix__a)">
        <path
          fill="currentColor"
          d="M9.49 6.775 15.318 0h-1.381l-5.06 5.883L4.833 0H.172l6.112 8.896L.172 16h1.381l5.345-6.212L11.166 16h4.662zM7.598 8.974l-.62-.886L2.051 1.04h2.121L8.15 6.728l.62.886 5.168 7.394h-2.121z"
        />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
