export default function NetworkBarsIcon({
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
          d="M13.388.87v14.262h1.903V.869zm-3.17 4.387v9.875h1.9V5.257zM7.045 8.55v6.582H8.95V8.55zm-3.169 2.194v4.388h1.903v-4.388zM.708 12.341v2.79H2.61v-2.79z"
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
