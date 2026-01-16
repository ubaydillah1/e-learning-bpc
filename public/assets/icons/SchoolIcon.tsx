export default function SchoolIcon({
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
          strokeWidth={1.6}
          d="m12 7.2 6.4 3.2v12.8H5.6V10.4zm0 0V0M0 23.2h24m-21.6 0v-9.6h3.2m16 9.6v-9.6h-3.2m-8 9.6v-4.8h3.2v4.8M12 .8h4.8V4H12m0 11.2a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Z"
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
