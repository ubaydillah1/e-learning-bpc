export default function DiscountIcon({
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
          fill="currentColor"
          d="M20.04 8.71V4h-4.7L12 .69 8.71 4H4v4.71L.69 12 4 15.34v4.7h4.71L12 23.35l3.34-3.31h4.7v-4.7L23.35 12zM8.83 7.05c.98 0 1.77.79 1.77 1.78a1.77 1.77 0 0 1-1.77 1.77c-.99 0-1.78-.79-1.78-1.77 0-.99.79-1.78 1.78-1.78M15.22 17a1.775 1.775 0 1 1 .01-3.55 1.775 1.775 0 0 1-.01 3.55m-6.72.03L7 15.53 15.53 7l1.5 1.5z"
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
