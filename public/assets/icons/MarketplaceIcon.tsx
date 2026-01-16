export default function MarketplaceIcon({
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
        strokeLinejoin="round"
        strokeWidth={1.636}
        d="M3.818 11.182H7.91m0 0V8.727m0 2.455H12m0 0V8.727m0 2.455h4.09m0 0V8.727m0 2.455h4.092M9.545 14.454h1.637m1.636 0h1.636m-1.636 2.455h1.636m-4.909 0h1.637M4.636 21v-9.818H3V7.909L5.455 3h13.09L21 7.91v3.272h-1.636V21z"
      />
    </svg>
  );
}
