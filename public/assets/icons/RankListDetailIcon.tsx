export default function RankListDetailIcon({
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
        fill="currentColor"
        d="M4.2 4.8a1.8 1.8 0 0 0-1.8 1.8V9a1.8 1.8 0 0 0 1.8 1.8h2.4A1.8 1.8 0 0 0 8.4 9V6.6a1.8 1.8 0 0 0-1.8-1.8zm-.6 1.8a.6.6 0 0 1 .6-.6h2.4a.6.6 0 0 1 .6.6V9a.6.6 0 0 1-.6.6H4.2a.6.6 0 0 1-.6-.6zm7.8-.6a.6.6 0 0 0 0 1.2H21A.6.6 0 0 0 21 6zm0 2.4a.6.6 0 0 0 0 1.2h7.2a.6.6 0 0 0 0-1.2zm-7.2 4.8A1.8 1.8 0 0 0 2.4 15v2.4a1.8 1.8 0 0 0 1.8 1.8h2.4a1.8 1.8 0 0 0 1.8-1.8V15a1.8 1.8 0 0 0-1.8-1.8zM3.6 15a.6.6 0 0 1 .6-.6h2.4a.6.6 0 0 1 .6.6v2.4a.6.6 0 0 1-.6.6H4.2a.6.6 0 0 1-.6-.6zm7.8-.6a.6.6 0 0 0 0 1.2H21a.6.6 0 0 0 0-1.2zm0 2.4a.6.6 0 0 0 0 1.2h7.2a.6.6 0 0 0 0-1.2z"
      />
    </svg>
  );
}
