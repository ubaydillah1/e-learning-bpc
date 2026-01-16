export default function GitlabIcon({
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
      <g clipPath="url(#prefix__a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m12 22.13 10.65-7.74a.84.84 0 0 0 .35-.94l-1.27-3.76-2.44-7.51a.4.4 0 0 0-.11-.18.43.43 0 0 0-.69.16l-2.44 7.51h-8.1L5.51 2.18A.4.4 0 0 0 5.4 2a.43.43 0 0 0-.69.16L2.27 9.67l-1.22 3.78a.84.84 0 0 0 .3.94z"
        />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
