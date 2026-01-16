export default function SettingsIcon({
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
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        <path d="M19.286 15.96A1.65 1.65 0 0 1 19.4 15a1.65 1.65 0 0 1 1.51-1H21a2 2 0 0 0 0-4h-.17a1.65 1.65 0 0 1-1.51-1v-.08a1.65 1.65 0 0 1 .33-1.82l.06-.06a2 2 0 0 0 0-2.83 2 2 0 0 0-2.83 0l-.06.06A1.65 1.65 0 0 1 15 4.6a1.65 1.65 0 0 1-1-1.51V3a2 2 0 1 0-4 0v.17a1.65 1.65 0 0 1-1 1.51h-.08a1.65 1.65 0 0 1-1.82-.33l-.06-.06a2 2 0 1 0-2.83 2.83l.06.06A1.65 1.65 0 0 1 4.6 9a1.65 1.65 0 0 1-1.51 1.08H3a2 2 0 1 0 0 4h.17a1.65 1.65 0 0 1 1.51 1 1.65 1.65 0 0 1-.33 1.82l-.06.06a2 2 0 0 0 1.415 3.417 2 2 0 0 0 1.415-.587l.06-.06A1.65 1.65 0 0 1 9 19.4a1.65 1.65 0 0 1 1.08 1.51V21a2 2 0 0 0 4 0v-.17a1.65 1.65 0 0 1 1-1.51 1.65 1.65 0 0 1 1.82.33l.06.06a2 2 0 0 0 2.83 0 2 2 0 0 0 0-2.83l-.06-.06a1.65 1.65 0 0 1-.444-.86" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
